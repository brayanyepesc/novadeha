export const Title = ({ text }: { text: string }) => {
  return <h2 role="heading" className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-novaviolet via-novapink to-novayellow text-2xl" aria-label="Contact list title">{text}</h2>;
};
