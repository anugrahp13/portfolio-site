import { useRouter } from "next/navigation";
import { SosmedProps } from "../elements/types/Sosmed.type";

export const Sosmed: React.FC<SosmedProps> = ({
  href,
  icon: Icon = () => null,
  iconClassName,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  const defaultStyle =
    "w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:text-white hover:bg-primary dark:border-white hover:dark:border-primary";

  return (
    <button onClick={handleClick} className={defaultStyle}>
      <Icon className={iconClassName} />
    </button>
  );
};
