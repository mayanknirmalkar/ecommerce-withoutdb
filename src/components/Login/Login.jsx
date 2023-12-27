import { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { login } from "../../features/slices/authSlice.jsx";
import { useDispatch } from "react-redux";

const Login = () => {
    const initialState = {
        name: "",
        password: "",
        image: "",
    };
    const [values, setValues] = useState(initialState);
    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value})
    }
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-1 items-center justify-items-center h-screen">
            <Card className="w-96">
                <CardHeader
                variant="gradient"
                color="deep-orange"
                className="mb-4 grid h-28 place-items-center">
                    <Typography variant="h3" color="white">
                        Log In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input
                    label="Name"
                    size="lg"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}/>
                    <Input
                    label="Password"
                    size="lg"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onChange}/>
                    <Input
                    label="Image URL Address"
                    size="lg"
                    type="text"
                    name="image"
                    value={values.image}
                    onChange={onChange}/>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient"
                    fullWidth
                    onClick={() => dispatch(login(values))} className="text-base">
                        Log In
                    </Button>
                    <Typography variant="small"
                    className="mt-6 flex justify-center">
                        Image is optional
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login;