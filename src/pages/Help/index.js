import React, { useState } from 'react';
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import {KeyboardArrowLeft ,KeyboardArrowRight} from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { Wrapper,Image,HelpText,StyledStepper } from './styles'

const Help = () => {
    const [getStep, setStep] = useState(0)

    const steps = [
        {
          label: 'Open Chessboard',
          imgPath:
          'https://via.placeholder.com/640x360',
        },
        {
          label: 'Select Knight position',
          imgPath:
            'https://via.placeholder.com/640x360',
        },
        {
          label: 'Check results',
          imgPath:
            'https://via.placeholder.com/640x360'
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
                    alt={steps[getStep].label}
                />
                <HelpText>{steps[getStep].label}</HelpText>
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
