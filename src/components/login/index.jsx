import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"

const Login = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-screen flex">
          <div className="relative h-full max-lg:hidden">
            <div className="w-[35vw] brightness-[.8] h-screen bg-cover" style={{ backgroundImage: 'url(/images/bg-login.jpg)' }}></div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[40rem]">
              <p className="text-stone-600 p-4 text-lg">
                <span className="block">Welcome back,</span>
                <span>Please sign in to your account.</span>
              </p>
              <hr />
              <div className="p-4">
                <div className="flex max-md:flex-col gap-4">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="email" className="text-stone-600 text-sm">Email</label>
                    <TextField
                      id="email"
                      size="small"
                      placeholder="Email here..."
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="password" className="text-stone-600 text-sm">Password</label>
                    <TextField
                      type="password"
                      id="password"
                      size="small"
                      placeholder="Password here..."
                    />
                  </div>
                </div>
                <FormControlLabel control={<Checkbox size="small" defaultChecked />} label={<span className="text-sm text-stone-500">Keep me logged in</span>} />
              </div>
              <hr />
              <div className="p-4 flex justify-end">
                <Button variant="contained" color="primary">Login to Dashboard</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login