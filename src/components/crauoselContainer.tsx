interface CrauoselContainerProps {
  children: React.ReactNode[];
}

export default function crauoselContainer({
  children,
}: CrauoselContainerProps) {
  return <div>{children}</div>;
}
