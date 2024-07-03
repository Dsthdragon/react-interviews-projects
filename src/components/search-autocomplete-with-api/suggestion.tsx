interface Props {
  data: string[];
  handleClick: (suggestion: string) => void;
}
export default function Suggestions({ data, handleClick }: Props) {
  return (
    <ul>
      {data.map((item, index) => (
        <li onClick={() => handleClick(item)} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
