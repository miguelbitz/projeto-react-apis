import { Container, ContainerDetail, Title } from "./PokemonDetailPageStyle"
import { Header } from "../../components/Header/Header"

export const PokemonDetailPage = () => {
    return (
        <div>
            <Header />
            <Container>
                <Title>
                    <h1>Detalhes</h1>
                </Title>
                <ContainerDetail>
                    <h1>PokemonDetail</h1>
                </ContainerDetail>
            </Container>
        </div>
    )
}