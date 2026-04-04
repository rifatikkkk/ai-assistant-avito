import { Button, HelpButton, Input, Select, TextArea } from "@/shared/ui";
import "./EditAd.style.css";

export const EditAd = () => {
  return (
    <form className="edit-form">
      {/* every attribute =  feature */}
      <div className="layout-column category">
        <span>Категория</span>
        <Select
          name="category"
          values={["Электроника", "Недвижимость"]}
          width={256}
          primaryColor={true}
        />
      </div>

      <div className="layout-column">
        <div className="layout-row">
          <img src="/svg/important.svg" alt="important-icon" />
          <span>Название</span>
        </div>
        <Input name="name" placeholder="MacBook Pro 16" />
      </div>

      <div className="layout-column">
        <div className="layout-row">
          <img src="/svg/important.svg" alt="important-icon" />
          <span>Цена</span>
        </div>
        <div className="price__actions">
          <Input name="price" placeholder="160000" />

          <HelpButton>Узнать рыночную стоимость</HelpButton>
        </div>
      </div>

      <div className="layout-column specs">
        <span>Характеристики</span>
        <div className="specs-actions">
          <div className="layout-column specs-type">
            <label>Тип</label>
            <Select
              name="type"
              width={456}
              values={["Ноутбук", "Телефон"]}
              primaryColor={false}
            />
          </div>

          <div className="layout-column specs-brand">
            <label>Брэнд</label>
            <Input name="brand" placeholder="Apple" />
          </div>

          <div className="layout-column specs-model">
            <label>Модель</label>
            <Input name="model" placeholder="M1 Pro" />
          </div>

          <div className="layout-column specs-color">
            <label>Цвет</label>
            <Input name="color" placeholder="Цвет" />
          </div>

          <div className="layout-column specs-condition">
            <label>Состояние</label>
            <Select
              name="condition"
              width={456}
              values={["Новое", "Б/у"]}
              primaryColor={false}
            />
          </div>
        </div>
      </div>

      <div className="layout-column desc">
        <span>Описание</span>
        <TextArea name="desc" placeholder="Описание" />
        <HelpButton>Улучшить описание</HelpButton>
      </div>

      <div className="edit-form__actions">
        <Button>Сохранить</Button>
        <Button primaryColor={false}>Отменить</Button>
      </div>
    </form>
  );
};
