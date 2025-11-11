import Section from "@/components/Section";
import CrauoselContainer from "@/components/crauoselContainer";
import RestaurantCard from "@/components/restaurantCard";


export default function page() {
  return (
    <Section title="近くのお店">
      <CrauoselContainer>
        {Array.from({ length: 5 }).map((_, index) => {
          return <RestaurantCard key={index} />
        })}
      </CrauoselContainer>
    </Section>
  )
}
