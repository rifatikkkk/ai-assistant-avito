import { PageButton } from "@/shared/ui/PageButton";
import "./switchPage.style.css";

export const SwitchPage = () => {
  return (
    <div className="switch-layout">
      <PageButton onClick={() => {}} disabled={true}>
        <img src="svg/left.svg" alt="left-icon" />
      </PageButton>
      <PageButton isActive={true} onClick={() => {}}>
        2
      </PageButton>
      <PageButton onClick={() => {}}>
        <img src="svg/right.svg" alt="right-icon" />
      </PageButton>
    </div>
  );
};
