interface props{
    amount:number
}

const FormatedPrice = ({amount}: props) => {
    const formatedAmount=new Number(amount).toLocaleString("en-us",{
        style:"currency",
        currency:"USD",
        minimumFractionDigits:2
    })

  return (
    <span> 
        { formatedAmount }
    </span>
  )
}

export default FormatedPrice