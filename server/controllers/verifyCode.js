const verifyCode = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    console.log('Body Find:', req.body)
    res.status(200).json({
      msg: 'Hello',
    })
  } catch (error) {
    res.status(404).json({
      error,
    })
  }
}

export { verifyCode }
