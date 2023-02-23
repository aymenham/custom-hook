type Props = {
  text: string;
  count: number;
};
const Count = ({ text, count }: Props) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
};

export default Count;
