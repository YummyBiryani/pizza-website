import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer } from './HeroElements';

interface Props {

}

export const Hero: React.FC<Props> = () => {
        return (
            <HeroContainer>
                <Navbar/>
            </HeroContainer>
        );
}