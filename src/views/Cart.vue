<template>
    <h2 class="fw-bold mb-4 mt-2">ตะกร้าสินค้า</h2>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ภาพสินค้า</th>
                                <th>ชื่อ</th>
                                <th class="text-end">จำนวน</th>
                                <th class="text-end">ราคาต่อชิ้น</th>
                                <th class="text-end">ราคารวม</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in store.cartItems" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>
                                    <img :src="item.image" 
                                    class="fluid rounded"
                                    width="120"
                                    :alt="item.name" />
                                </td>
                                <td>
                                    {{item.name}}
                                </td>
                                <td class="text-end">
                                    <i @click ="store.incrementQ(item)"
                                        class="bi bi-caret-up"></i>
                                    <span class="mx-2">
                                        {{ item.quantity }}
                                    </span>
                                    <i @click = "store.decrementQ(item)" class="bi bi-caret-down"></i>
                                </td>
                                <td class="text-end">
                                    ${{item.price}}
                                </td>
                                <td class="text-end">
                                    ${{item.price * item.quantity }} 
                                </td>
                                <td style="width:50px">
                                    <i @click= "store.removeFromCart(item)" class="bi bi-trash text-danger"></i>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="5" class="text-end">
                                    ทั้งหมด
                                </th>
                                <td colspan="1" class="text-end">
                                    <span class="fw-bold">
                                        ${{ store.cartItems.reduce((acc,item) => acc += item.price * item.quantity, 0) }}
                                    </span>
                                </td>
                                <td></td>
                            </tr>

                            <tr>
                                <td colspan="3" class="text-start"><router-link to='/' class="btn btn-secondary"><i class="bi bi-caret-left"></i> กลับหน้าหลัก</router-link></td>
                                <td colspan="4" class="text-end"><button class="btn btn-success"><i class="bi bi-paypal"></i> ไปชำระเงิน</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
    // Mockup Data
    // import products from '@/mockupdata/products'

    //get store
    // const data = useShoppingStore();

    import { useShoppingStore } from '@/store/index'

    // Load from pinia state
    const store = useShoppingStore()

</script>

<style>
    i{
        cursor: pointer;
    }
</style>