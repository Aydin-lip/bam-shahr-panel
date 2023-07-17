
import { Button, Checkbox, FormControlLabel, TextField, styled } from "@mui/material"
import { useNavigate } from "react-router";

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&': {
      color: '#fff'
    },
  },
});

const Login = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-dark-them-active">
        <div className="w-full h-screen flex">
          <div className="relative h-full max-lg:hidden">
            <div className="w-[35vw] brightness-[.4] h-screen bg-cover" style={{ backgroundImage: 'url(/images/bg-login.jpg)' }}></div>
          </div>
          <div className="w-full h-full max-sm:bg-dark-them flex justify-center items-center">
            <div className="w-[40rem] bg-dark-them rounded-lg">
              <p className="text-dark-them p-4 text-lg">
                <span className="block">Welcome back,</span>
                <span>Please sign in to your account.</span>
              </p>
              <hr />
              <div className="p-4">
                <div className="flex max-md:flex-col gap-4">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="email" className="text-dark-them text-sm">Email</label>
                    <CssTextField
                      id="email"
                      size="small"
                      placeholder="Email here..."
                      className="bg-dark-them-light rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="password" className="text-dark-them text-sm">Password</label>
                    <CssTextField
                      type="password"
                      id="password"
                      size="small"
                      placeholder="Password here..."
                      className="bg-dark-them-light rounded-lg"
                    />
                  </div>
                </div>
                <FormControlLabel control={<Checkbox size="small" defaultChecked />} label={<span className="text-sm text-stone-500">Keep me logged in</span>} />
              </div>
              <hr />
              <div className="p-4 flex justify-end">
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>Login to Dashboard</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login