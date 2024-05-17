import "../styles/diplomPageStyles.css";
import React, { useState } from "react";
import "@progress/kendo-theme-default";
import ReadFileImage from "../components/ReadFileImage";
import ParseFile from "../components/ParseFile";
import ChooseFormat from "../components/chooseFormat";
import useStore from "../useStore";
import {
  ButtonGroup,
  Divider,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

function FunctionalPage() {
  const [textField, setTextField] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const {
    setFontSize,
    setFormatName,
    formatName,
    setField,
    font,
    setFont,
    textStyle,
    setTextStyle,
    fontSize,
    textColor,
    setTextColor,
  } = useStore();

  return (
    <div className="imagePage">
      <ButtonGroup fullWidth style={{ marginBottom: "10px" }}>
        <Button
          className="dataType"
          variant="outlined"
          sx={{ fontSize: "10px", padding: "2px" }}
          onClick={() => setTabValue(0)}
        >
          Данные из .xlsx-файла
        </Button>
        <Button
          className="dataType"
          variant="outlined"
          sx={{ fontSize: "10px", padding: "2px" }}
          onClick={() => setTabValue(1)}
        >
          Данные из БД
        </Button>
      </ButtonGroup>
      {tabValue === 0 && <ParseFile />}
      {tabValue === 1 && (
        <label>
          Введите id мероприятия
          <input type="text" />
        </label>
      )}

      <div className="formatFIO">
        <span>Формат ФИО</span>
        <label className="radio">
          <input
            type="radio"
            name="FIO"
            value="FIO"
            checked={formatName === "FIO"}
            onChange={(e) => setFormatName(e.target.value)}
          />
          ФИО полностью
        </label>
        <label className="radio">
          <input
            type="radio"
            name="FIO"
            value="FI"
            checked={formatName === "FI"}
            onChange={(e) => setFormatName(e.target.value)}
          />
          Фамилия Имя
        </label>
      </div>

      <div className="createField">
        <span>Создать поле</span>
        <div>
          <input type="text" onChange={(e) => setTextField(e.target.value)} />
          <button onClick={() => setField(textField)}>Создать</button>
        </div>
      </div>

      <Divider variant="middle" sx={{ backgroundColor: "black" }} />
      <ReadFileImage />
      <ChooseFormat />
      <Divider
        variant="middle"
        sx={{ backgroundColor: "black", marginBottom: "1.5vh" }}
      />

      <div className="formatFIO" style={{ marginBottom: "2vh" }}>
        <label>
          Шрифт
          <select value={font} onChange={(e) => setFont(e.target.value)}>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Arial">Arial</option>
            <option value="Calibri">Calibri</option>
          </select>
        </label>
      </div>

      <div className="formatFIO">
        <label>
          Размер шрифта
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </label>
      </div>

      <div className="formatFIO">
        <label>
          Цвет текста
          <input
            type="text"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
      </div>

      <ToggleButtonGroup
        value={textStyle}
        onChange={(e, newStyle) => setTextStyle(newStyle)}
        exclusive
      >
        <ToggleButton size="small" value="bold" aria-label="bold">
          <FormatBoldIcon fontSize="small" />
        </ToggleButton>
        <ToggleButton size="small" value="italic" aria-label="italic">
          <FormatItalicIcon fontSize="small" />
        </ToggleButton>
        <ToggleButton size="small" value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon fontSize="small" />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default FunctionalPage;
