
<script>
                var balence = 10000
                var amount = prompt("enter a amount to trasfer")

                if(amount<balence){
                        alert("befor deduction balence:"+ balence)
                        balence = balence-amount
                        alert("deducted successfuly")
                        alert("befor deducted balence:" + balence)
                }
                else{
                        alert("your balence is :" + balence +"enter amount less then your balence")
                }
        </script>