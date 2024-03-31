import { WhyDrinkWater } from "../WhyDrinkWater/WhyDrinkWater"
import { WaterConsumptionTracker } from "../WaterConsumptionTracker/WaterConsumptionTracker"
import { Container } from "./MainContent.styled"

export const MainComponent = () => {
    return (
        <Container>
            <WaterConsumptionTracker />
            <WhyDrinkWater/>
        </Container>
    )
}