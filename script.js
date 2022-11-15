function somaTotal(itens) {
    let precoTotal = 0;
    for (let i = 0; i < itens.length; i++) {

 precoTotal += parseFloat(itens[i].price )

    }
    return precoTotal
}
console.log(somaTotal(itens))




function carrinhoDeCompras(itens) {


    let body = document.querySelector("body")

    let main = document.createElement('main')


    let h1 = document.createElement('h1')
    h1.innerHTML = 'Virtual Market'
    main.appendChild(h1)



    let divItem = document.createElement('div')
    divItem.classList.add("container")



    let pItem = document.createElement('p')
    pItem.innerHTML = 'Item'

    divItem.appendChild(pItem)

    let pItem2 = document.createElement('p')
    pItem2.innerHTML = 'Valor'


    divItem.appendChild(pItem2)

    main.appendChild(divItem)
    body.appendChild(main)



    let ul = document.createElement('ul')
    ul.classList.add('lista')
    main.appendChild(ul)




    for (let i = 0; i < itens.length; i++) {
        let item = itens[i]

        let li = document.createElement('li')
        li.classList.add(`produtos-${i + 1}`)
        main.appendChild(ul)

        let name = document.createElement('p')
        name.innerHTML = item.name


        let price = document.createElement('p')
        price.innerHTML = item.price

        li.append(name, price)
        ul.appendChild(li)
    }

    let divItem2 = document.createElement('div')
    divItem2.classList.add("container-2")
    main.appendChild(divItem2)


    let total = document.createElement('p')
    total.innerText = "Total"
    divItem2.appendChild(total)


    let totalPreco = document.createElement('p')
    totalPreco.innerText = `$${somaTotal(itens)}`
    divItem2.appendChild(totalPreco)
    


    let botao = document.createElement('button')
    botao.innerText = 'Finalizar Compra'
    main.appendChild(botao)

}
carrinhoDeCompras(itens)





