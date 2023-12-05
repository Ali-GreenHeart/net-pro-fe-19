import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonNetPro from "../Button";
import React, { useState } from "react";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

let bgColor = '#F3F3F3'
let textColor = '#7A8BA3'
const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required!"),
            message: Yup.string()
                .min(20, "Mininum 20 characters")
                .max(300, "Maximum 300 characters")
                .required("Required!"),
        }),
        onSubmit: (values) => {
            formik.handleReset()
            console.log(JSON.stringify(values));
        }
    })
    return (
        <Container sx={{ textAlign: 'left', py: 1 }}>
            <form onSubmit={formik.handleSubmit}>
                <Stack
                    gap={3}
                    flexDirection="row"
                    flexWrap="wrap"
                    sx={{
                        "&>div": {
                            flex: 1
                        },
                        "& input, & textarea": {
                            minWidth: 200
                        }
                    }}
                >
                    <Stack justifyContent="space-between" spacing={2}>
                        
                            <TextField
                                placeholder="Adınız və Soyadınız"
                                fullWidth
                                name="fullName"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                InputProps={{ style: { color: textColor } }}
                                sx={{ backgroundColor: bgColor }}
                                onBlur={formik.handleBlur}

                            />
                        {formik.errors.fullName && formik.touched.fullName && (
                            <p style={{ color: 'red', fontSize: 12, position: "relative" }}>{formik.errors.fullName}</p>
                        )}
                        <TextField
                            fullWidth
                            placeholder="Email ünvanı"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            InputProps={{ style: { color: textColor } }}
                            sx={{ backgroundColor: bgColor }}
                            onBlur={formik.handleBlur}

                        />
                        {formik.errors.email && formik.touched.email && (
                            <p style={{ color: 'red', fontSize: 12 }}>{formik.errors.email}</p>
                        )}
                        <TextField
                            fullWidth
                            placeholder="Əlaqə nömrəsi"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            InputProps={{ style: { color: textColor } }}
                            sx={{ backgroundColor: bgColor }}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.phone && formik.touched.phone && (
                            <p style={{ color: 'red', fontSize: 12 }}>{formik.errors.phone}</p>
                        )}
                    </Stack>
                    <Box>
                        <TextField
                            fullWidth
                            minRows={7}
                            placeholder="Mesajınız"
                            multiline
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            InputProps={{ style: { color: textColor } }}
                            sx={{ backgroundColor: bgColor }}
                            onBlur={formik.handleBlur}

                        />
                        {formik.errors.message && formik.touched.message && (
                            <p style={{ color: 'red', fontSize: 12 }}>{formik.errors.message}</p>
                        )}
                        
                    </Box>
                </Stack>
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <ButtonNetPro color='primary' iconColor='white' title='Göndər' key='btn' baseColor='primary'/>
                </Box>
            </form>

        </Container>

    )
}
export default ContactForm
