import { HelpButton, NotificationAi } from "@/shared/ui";
import "./getPriceAi.style.css";
import { useState, type FC } from "react";
import type { FormDataUpdate } from "@/entities/ad/model";
import { parsePriceFromResponse } from "../model/utils/parsePrice";
import { requestAi } from "@/shared/api";
import { promptPrice } from "../model";

interface GetPriceAiProps {
  value: FormDataUpdate;
  onPriceSuggestion?: (price: string) => void;
}

export const GetPriceAi: FC<GetPriceAiProps> = ({
  value,
  onPriceSuggestion,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countRequest, setCountRequest] = useState(0);
  const [commentary, setCommentary] = useState<string | null>(null);
  const [priceResponse, setPriceResponse] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleHelp = async () => {
    if (isLoading) return;
    setIsError(false);
    setIsLoading(true);
    setCountRequest((prev) => prev + 1);
    try {
      const dynamicPrompt = promptPrice(value);
      const responseAi = await requestAi(dynamicPrompt);
      if (responseAi.done) {
        const parsed = parsePriceFromResponse(responseAi.response);
        setPriceResponse(parsed);
        setCommentary(
          responseAi.response +
            `\n${parsed ? `При применении цена будет указана: ${parsed} ` : "Не удалось получить цену"}`,
        );
      }
    } catch (error) {
      setIsError(true);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyPrice = () => {
    if (priceResponse && onPriceSuggestion) {
      setCommentary(null);
      onPriceSuggestion(priceResponse);
    }
  };

  return (
    <div className="help-price__wrap">
      {commentary && (
        <NotificationAi
          isError={isError}
          content={commentary}
          onApply={handleApplyPrice}
          onClose={() => setCommentary(null)}
        />
      )}
      <HelpButton
        text="Узнать рыночную цену"
        onHandle={handleHelp}
        isLoading={isLoading}
        countRequest={countRequest}
      />
    </div>
  );
};
