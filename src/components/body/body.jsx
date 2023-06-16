
const body = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
            <Login />
        }
      />
      <Route
        path="/signup"
        element={
            <Signup />
        }
      />
   
      <Route
        path="/profile"
        element={
            <Profile />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>   
    
    </>
  )
}

export default body