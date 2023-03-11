import React, {useEffect} from "react";
import { FormikContext,Form, useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const { onClose } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      "firstName": "",
      "email": "",
      "type": 'hireMe' | 'openSource' | 'other',
      "comment": "",
    },
    onSubmit:(values) => {
      submit(values);
        if(response !== null){
          if (response.type === "success") {
            formik.resetForm();
            onOpen("success", `Form submitted successfully. Name: ${values.firstName}`);
          } else {
            onOpen("error", response.message);
          }
        }
      },
    validationSchema: Yup.object({
      firstName: Yup.string()
     .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      comment:Yup.string().required('Required').min(25, 'Must be at least 25 characters'),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={Boolean(formik.errors.firstName && formik.touched.firstName)}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <FormErrorMessage> 'Required' </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(formik.errors.email && formik.touched.email)}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormErrorMessage> 'Required' </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe" style={{color:"black"}}>Freelance project proposal</option>
                  <option value="openSource" style={{color:"black"}}>
                    Open source consultancy session
                  </option>
                  <option value="other" style={{color:"black"}}>Other Enquiries</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={Boolean(formik.errors.comment && formik.touched.comment)}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
                <FormErrorMessage> 'Required at least 25 characters'</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;