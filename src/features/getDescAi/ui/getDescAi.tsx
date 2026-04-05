import { useState, type FC } from "react";
import "./getDescAi.style.css";
import { HelpButton, NotificationAi } from "@/shared/ui";
import type { FormDataUpdate } from "@/entities/ad/model";
import { promptDesc } from "../model/prompt/promptDesc";
import { requestAi } from "@/shared/api";

interface GetDescAiProps {
  value: FormDataUpdate;
  onDescSuggestion?: (desc: string) => void;
}

export const GetDescAi: FC<GetDescAiProps> = ({ value, onDescSuggestion }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countRequest, setCountRequest] = useState(0);
  const [commentary, setCommentary] = useState<string | null>(null);

  const handleHelp = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setCountRequest((prev) => prev + 1);
    try {
      const dynamicPrompt = promptDesc(value);
      const responseAi = await requestAi(dynamicPrompt);

      if (responseAi.done) setCommentary(responseAi.response);
    } catch (error) {
      console.error("Ollama error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyDesc = () => {
    if (commentary && onDescSuggestion) {
      setCommentary(null);
      onDescSuggestion(commentary);
    }
  };

  return (
    <div className="help-desc__wrap">
      {commentary && (
        <NotificationAi
          content={commentary}
          onApply={handleApplyDesc}
          onClose={() => setCommentary(null)}
        />
      )}
      <HelpButton
        text={
          value.description !== "" ? "Улучшить описание" : "Придумать описание"
        }
        onHandle={handleHelp}
        isLoading={isLoading}
        countRequest={countRequest}
      />
    </div>
  );
};
