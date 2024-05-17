import useStore from "../useStore";
import '../styles/diplomPageStyles.css'
import CreateField from "../components/createField";

const PreviewPage = () => {
  const { parseValuesArray, index, nameImage, fontSize, format, setExportFileName, setIndex, field, formatName } = useStore();

  const [x, y] = format ? ['877px', '620px'] : ['620px', '876.85px'];

  let result = [];

  // Проверка на наличие данных
  if (parseValuesArray.length > 0) {
    const currentValues = parseValuesArray[index];

    // Заполнение пустых значений для 2-го и 3-го участников команды
    for (let i = 2; i <= 3; i++) {
      if (!currentValues || !currentValues[`Surname${i}`]) {
        currentValues[`Surname${i}`] = ' ';
        currentValues[`Name${i}`] = ' ';
        currentValues[`Patronymic${i}`] = ' ';
      }
    }

    // Парсинг данных в соответствии с выбранным форматом имени
    const formattedNames = [];
    for (let i = 1; i <= 3; i++) {
      const namePart = formatName === "FI" 
        ? `${currentValues[`Surname${i}`]} ${currentValues[`Name${i}`]}` 
        : `${currentValues[`Surname${i}`]} ${currentValues[`Name${i}`]} ${currentValues[`Patronymic${i}`]}`;
      formattedNames.push(namePart);
    }

    result.push(formattedNames.join('\n'));

    // Добавление тренеров и команды, если они существуют
    if (currentValues.Tutor1) result.push(`Тренер: ${currentValues.Tutor1}`);
    if (currentValues.Tutor2) result.push(`Тренер: ${currentValues.Tutor2}`);
    if (currentValues.Team) result.push(`Команда ${currentValues.Team}`);
    result.push(field);
  } else {
    result.push('0');
  }

  return (
    <div className="diplomPage"
      style={{
        backgroundImage: `url(${nameImage})`,
        backgroundSize: 'cover',
        fontSize: `${fontSize}px`,
        backgroundPosition: 'center',
        height: y,
        width: x
      }}>
      {result.map((d, idx) => (
        <CreateField key={idx} value={d}></CreateField>
      ))}
    </div>
  );
}

export default PreviewPage;
