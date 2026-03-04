type IconProps = React.SVGProps<SVGSVGElement>;
export const Addition : React.FC<IconProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  width="24px" viewBox="0 -960 960 960" {...props}>
      <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
    </svg>
  );
};
