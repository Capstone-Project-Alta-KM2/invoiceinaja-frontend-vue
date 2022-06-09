<template>
    <div class="absolute z-30 new-client">
        <div class="bg-white m-3 p-3 border-1 rounded-lg text-left">
        <div class="mb-3">
            <span class="font-extrabold">Buat Client Baru</span>
        </div>
        <div>
            <form action="">
            <div class="flex flex-column text-left">
                <label for="">Nama Client</label>
                <input type="text" placeholder="Name" />

                <label for="">Email</label>
                <input type="email" placeholder="example@email.com" />

                <label for="">Streets Address</label>
                <input type="text" placeholder="Jl. Jalan-Jalan" />

                <label for="">Company</label>
                <input type="text" placeholder="Company name" />

                <label for="">Telp</label>
                <input type="number" placeholder="08123xxxxxxx" />

                <label for="">Alamat</label>
                <input type="text" placeholder="Alamat" />

                <label for="">Provinsi</label>
                <input type="text" placeholder="Provinsi" />

                <label for="">Kota/Kabupaten</label>
                <input type="text" placeholder="Kota/Kabupaten" />

                <label for="">Kode Pos</label>
                <input type="number" placeholder="1234" />

                <label for="">Negara</label>
                <input type="text" placeholder="Indonesia" />

                <div class="flex justify-content-between mt-4">
                <button
                    type="submit"
                    class="bg-gray-300 px-3 py-1 border-1 border-black rounded"
                >
                    Simpan Invoice
                </button>
                <button
                    type="button"
                    @click="closeFormClient()"
                    class="px-5 py-1 border-1 border-black rounded"
                >
                    Batal
                </button>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewClientPage",
    methods: {
        closeFormClient() {
            this.$emit('closeAddClient')
        },
    },
};
</script>

<style scoped>
input {
    width: 352px;
    height: 37px;
    margin-bottom: 0.7rem;
    padding: 0.1rem 0.6rem;
    border: 1px solid black;
    border-radius: 5px;
}
label {
    font-weight: bold;
    margin-bottom: 0.1rem;
}
</style>
