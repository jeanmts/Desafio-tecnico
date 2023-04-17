const sum = async (req, res) => {
  const { num1, num2 } = req.params;
  const validation = [num1, num2];
  try {
    if (validation.length < 2) {
      res.json({ message: "Dois valores são obrigatórios" });
    }
    res.status(200).json({
      numero1: Number(num1),
      numero2: Number(num2),
      resultado: Number(num1) + Number(num2),
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sum };
