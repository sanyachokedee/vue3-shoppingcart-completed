import { isTemplateNode } from '@vue/compiler-core'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import products from '../mockupdata/products'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return {
            products: products,
            cartItems: []

        }
    },

    actions: {

        // Add to cart
        // Add to cart
        addToCart(item: any) {
            // console.log('addToCart ='+ JSON.stringify(item))
            let index = this.cartItems.findIndex((product:any) => product.id === item.id)

            if(index !== -1){
                this.cartItems[index].quantity += 1
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been updated',
                    showConfirmButton: false,
                    timer: 1500
                })
            }else{
                item.quantity = 1
                this.cartItems.push(item)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        },

        // Increment quantity
        incrementQ(item: any) {
            let index = this.cartItems.findIndex((product: any) => product.id === item.id)
            // ถ้าไม่มีค่า 0 จะได้ -1 ไม่ต้องทำอะไร
            if (index !== -1) {
                this.cartItems[index].quantity += 1
            } 
        },

        // Decrement Quantity
        // อธิบาย ถ้ามีค่ามากกว่า -1 ให้ทำการลบจำนวนออก และ ถ้าค่าน้อยกว่า 0 ให้ลบรายการนั้นออกจากตระกร้า
        decrementQ(item:any) {
            let index = this.cartItems.findIndex((product:any) => product.id === item.id)
            if(index !== -1) {
                this.cartItems[index].quantity -= 1
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter((product:any) => product.id !== item.id)
                }
            }
        },


        // Remove Item from Cart
        removeFromCart(item:any) {
            this.cartItems = this.cartItems.filter((product: any) => product.id !== item.id)
        }

    }

})