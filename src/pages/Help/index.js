import React, { useState } from 'react';
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import {KeyboardArrowLeft ,KeyboardArrowRight} from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { Wrapper,Image,HelpText,StyledStepper } from './styles'

import help01 from '../../assets/images/help01.png'
import help02 from '../../assets/images/help02.png'
import help03 from '../../assets/images/help03.png'

const Help = () => {
    const [getStep, setStep] = useState(0)

    const steps = [
        {
          text: 'Click on the "Go TO BOARD" button to get to the board page.',
          imgPath: help01
        },
        {
          text: "Click on the desired cell to select knights's initial position.",
          imgPath: help02
        },
        {
          text: "Click on the button below to show/hide possible knigh's position in 2 turns",
          imgPath: help03
        }
      ];

    const nextButtonHandler = () => {
        if( getStep === steps.length - 1) return
        setStep(getStep + 1)
    }

    const nextButtonWrapperHandler = (jsx) => {
        if( getStep === steps.length - 1) return (
            <Link to="board">{jsx}</Link>
        )
        return jsx
    }
    return (
        <Wrapper container direction="column" justify="center">
            <Grid item container direction="column" justify="center" alignItems="center">
                <Image
                    src={steps[getStep].imgPath}
                />
                <HelpText align="center">{steps[getStep].text}</HelpText>
            </Grid>
            <Grid item container justify="center">
                <StyledStepper
                    steps={steps.length}
                    position="static"
                    variant="text"
                    activeStep={getStep}
                    nextButton={nextButtonWrapperHandler(
                            <Button size="small" color="primary" variant="contained" onClick={nextButtonHandler}>
                                {getStep < steps.length - 1 ? 'Next' : 'Go to Board'}
                                <KeyboardArrowRight />
                            </Button>
                        )
                    }
                    backButton={
                    <Button size="small" variant="contained" onClick={() => setStep(getStep - 1)} disabled={getStep === 0}>
                    <KeyboardArrowLeft />
                        Back
                    </Button>
                    }
                />
            </Grid>
        </Wrapper>
    )
};
export default Help;
