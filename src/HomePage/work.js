import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import "./work.css";

const steps = [
  {
    label: "STEP 1",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "STEP 2",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "STEP 3",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "STEP 4",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "STEP 5",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="work-outer-style">
      <div className="work-heading-style">
        <h3>How It Works?</h3> <p>5 simple steps to earn with ROXO platform!</p>
      </div>
      <div className="col-md-12 d-flex">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:"center",
                height: 50,
                pl: 2,
                bgcolor: "#262250",
                color: "white",
                borderTopRightRadius:"30px",
                borderTopLeftRadius:"30px",
             
              }}
            >
              <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box
              sx={{
                height: 255,
                maxWidth: 800,
                width: "100%",
                p: 2,
                color: "white",
                bgcolor: "#262250",
              }}
            >
              {steps[activeStep].description}
            </Box>
            <MobileStepper
              sx={{
                color: "white",
                backgroundColor: "#262250",
                borderBottomRightRadius:"30px",
                borderBottomLeftRadius:"30px"
              }}
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  sx={{ color: "white" }}
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next Step
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  sx={{ color: "white" }}
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Previous Step
                </Button>
              }
            />
          </Box>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
