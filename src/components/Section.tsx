import TextButtonToggle from "./TextButtonToggle";

interface SectionProps {
    children: React.ReactNode;
    title: string;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <section >
          <div className='flex items-center justify-between'>
              <h2 className="text-2xl font-bold">{ title }</h2>
              <TextButtonToggle />
          </div>
          { children }
    </section>
  )
}
