import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  ProjectSection,
  ProjectWrapper,
  ProjectHeading,
  ProjectContainer,
  ProjectCard,
  ProjectCardInfo,
  ProjectCardIcon,
  ProjectCardCost,
  ProjectCardLength,
  ProjectCardFeatures,
  ProjectCardFeature
} from './Project.elements';

function Project() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 100 }}>
      <ProjectSection>
        <ProjectWrapper>
          <ProjectHeading>My Projects</ProjectHeading>
          <ProjectContainer>
            <ProjectCard to='/'>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <GiRock />
                </ProjectCardIcon>
                <ProjectCardCost>Sun</ProjectCardCost>
                <ProjectCardLength>vanni</ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>100 New Users</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>See Project</Button>
              </ProjectCardInfo>
            </ProjectCard>

            <ProjectCard to='/'>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <GiRock />
                </ProjectCardIcon>
                <ProjectCardCost>Moon</ProjectCardCost>
                <ProjectCardLength>vanni</ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>100 New Users</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>See Project</Button>
              </ProjectCardInfo>
            </ProjectCard>

            <ProjectCard to='/'>
              <ProjectCardInfo>
                <ProjectCardIcon>
                  <GiRock />
                </ProjectCardIcon>
                <ProjectCardCost>Star</ProjectCardCost>
                <ProjectCardLength>vanni</ProjectCardLength>
                <ProjectCardFeatures>
                  <ProjectCardFeature>100 New Users</ProjectCardFeature>
                </ProjectCardFeatures>
                <Button primary>See Project</Button>
              </ProjectCardInfo>
            </ProjectCard>
          </ProjectContainer>
        </ProjectWrapper>
      </ProjectSection>
    </IconContext.Provider>
  );
}
export default Project;