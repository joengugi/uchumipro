import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Box,
  makeStyles,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import { FormLabel } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  formField: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
  },
}));


const FormPage1 = ({ formData, setFormData, handleNext }) => {
  const classes = useStyles();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      page1: {
        ...formData.page1,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Box p={2}>
          <Typography variant="h6">Page 1</Typography>
          <form className={classes.form}>
            <TextField
              className={classes.formField}
              label="Business Name"
              name="businessName"
              value={formData.page1.firstName}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.formField}
              label="Category"
              name="businessCategory"
              value={formData.page1.lastName}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.formField}
              label="City"
              name="city"
              value={formData.page1.lastName}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.formField}
              label="Business Background"
              name="businessBackground"
              onChange={handleInputChange}
              required
            />
            <div className={classes.fileInput} >
              <FormLabel> Upload business profile picture </FormLabel>
              <FileBase
                type="file"
                label = "Upload business profile picture"
                name="selectedFile"
                multiple={false}
                onDone={({base64}) => setFormData({...formData, selectedFile: base64})}
              />
          </div>

          <TextField
              className={classes.formField}
              label="Funding Goal. How much are you looking to raise?"
              name="fundingGoal"
              type='number'
              onChange={handleInputChange}
              required
          />

          <TextField
            className={classes.formField}
            label="Campaign Period?"
            name="campaignPeriod"
            type='month'
            onChange={handleInputChange}
            required
          />
            
            <div className={classes.buttonContainer}>
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            </div>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

const FormPage2 = ({ formData, setFormData, handleNext, handleBack }) => {
  const classes = useStyles();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      page2: {
        ...formData.page2,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Box p={2}>
          <Typography variant="h6">Page 2</Typography>
          <form className={classes.form}>
            <TextField
              className={classes.formField}
              label="Email"
              name="email"
              value={formData.page2.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.formField}
              label="Phone Number"
              name="phone"
              value={formData.page2.phone}
              onChange={handleInputChange}
              required
            />
            <div className={classes.buttonContainer}>
              <Button color="primary" onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            </div>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

const FormPage3 = ({ formData, setFormData, handleNext, handleBack }) => {
  const classes = useStyles();
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      page3: {
        ...formData.page3,
        [event.target.name]: event.target.value,
      },
    });
  };


  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Box p={2}>
          <Typography variant="h6">Page 2</Typography>
          <form className={classes.form}>
            <TextField
              className={classes.formField}
              label="Email"
              name="email"
              value={formData.page3.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.formField}
              label="Phone Number"
              name="phone"
              value={formData.page3.phone}
              onChange={handleInputChange}
              required
            />
            <div className={classes.buttonContainer}>
              <Button color="primary" onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}

const MultiPageForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
  page1: { businessName: "", businessCategory: "",city: "", businessBackground: "",  selectedFile: "", fundingGoal: "", campaignPeriod: ""  },
  page2: { email: "", phone: "" },
  page3: { address: "", city: "", state: "" },
  });


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can send the form data to the server or perform any other action here
  };

  return (
  <Container maxWidth="sm">
    <Paper elevation={3}>
      <Box p={2}>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          <Step>
          <StepLabel>Page 1</StepLabel>
          </Step>
          <Step>
          <StepLabel>Page 2</StepLabel>
          </Step>
          <Step>
          <StepLabel>Page 3</StepLabel>
          </Step>
        </Stepper>

        <form onSubmit={handleFormSubmit}>
          {activeStep === 0 && (
            <FormPage1
              formData={formData}
              setFormData={setFormData}
              handleNext={handleNext}
            />
          )}

          {activeStep === 1 && (
            <FormPage2
              formData={formData}
              setFormData={setFormData}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}

          {activeStep === 2 && (
            <FormPage3
              formData={formData}
              setFormData={setFormData}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}
        </form>
      </Box>
    </Paper>
  </Container>
  );
}

export default MultiPageForm;















































// import React from 'react'
// import { Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import useStyles from "./Styles";
// import moment from "moment";
// import { useDispatch } from 'react-redux';
// import { deletePost, likePost } from "../../../actions/posts";

// const AddPost = ({ post, setCurrentId }) => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <Card className={classes.card}>
//         <CardMedia className={classes.media} image = {post.selectedFile} title = {post.title} />
//           <div className={classes.overlay}>
//             <Typography variant='h6'> {post.creator} </Typography>
//             <Typography variant='body2'> {moment(post.createdAt).fromNow()} </Typography>
//           </div>

//           <div className={classes.overlay2} >
//             <Button 
//               style={{color: "white"}}
//               size="small" 
//               onClick={() => setCurrentId(post._id)}>
//               <MoreHorizIcon fontSize = "medium" />
//             </Button>
//           </div>

//           <div className={classes.details}>
//             <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
//           </div>
//           <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
//           <CardContent>
//             <Typography  variant="body2" color='textSecondary' component="p"  >{post.message}</Typography>
//           </CardContent>

//           <CardActions className={classes.cardActions}>
//             <Button size = "small" color = "primary" onClick={() => dispatch(likePost(post._id))}>
//               <ThumbUpAltIcon fontSize = "small" />
//               &nbsp;Like &nbsp;
//               {post.likeCount}
//             </Button>

//             <Button size = "small" color = "primary" onClick={() => dispatch(deletePost(post._id)) }>
//               <DeleteIcon fontSize = "small" />
//               Delete
//             </Button>
//           </CardActions>

//       </Card>
//     </div>
//   )
// }

// export default AddPost