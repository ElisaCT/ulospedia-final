import {
    LoginAndGoToGenerateMotifPage,
    cariGambarUlos
} from "../../PreCondition";

describe('Fungsionalitas Menambahkan Gambar Hasil Generate Ulos pada fitur Generate motif - Metode Category Partitioning Method', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToGenerateMotifPage()
        cariGambarUlos()
    });


    const TestData = [
        //valid data
        {
            testName: 'Admin menambahkan hasil generate motif ulos dengan valid input pada semua field',
            image: 'motifUlos1.jpeg',
            ukuranMotifUlos: 'Besar',
        },
        // Invalid data - Gambar kosong
        {
            testName: 'Admin menambahkan hasil generate motif ulos dengan gambar kosong',
            image: '',
            ukuranMotifUlos: 'Sedang',
            messageValidation: 'Gambar hasil generate motif ulos harus diisi',
        },
        // Invalid data - Gambar PDF
        {
            testName: 'Admin menambahkan hasil generate motif ulos dengan gambar PDF',
            image: 'motifUlos1.pdf',
            ukuranMotifUlos: 'Kecil',
            messageValidation: 'Format gambar hasil generate motif ulos tidak valid',
        },
        // Invalid data - Gambar > 5MB
        {
            testName: 'Admin menambahkan hasil generate motif ulos dengan gambar > 5MB',
            image: 'largeMotifUlos.jpg',
            ukuranMotifUlos: 'Besar',
            messageValidation: 'Ukuran gambar hasil generate motif ulos terlalu besar. Harap isi gambar dengan ukuran maksimum 5MB',
        },
        // Invalid data - Dropdown tidak dipilih
        {
            testName: 'Admin menambahkan hasil generate motif ulos tanpa memilih ukuran motif',
            image: 'motifUlos1.jpeg',
            ukuranMotifUlos: '',
            messageValidation: 'Ukuran motif harus diisi',
        },
    ]

    TestData.forEach((data) => {
        it(data.testName, () => {
            cy.get('#hasil-gambar-motif-ulos').click()
            cy.get('#btn-tambah-gambar-motif-ulos').click()
            if (data.image) {
                cy.get('input#dropzone-file').attachFile(data.image);
            }
            if (data.ukuranMotifUlos) {
                cy.get('#dropdown-ukuran-motif').select(data.ukuranMotifUlos);
            }
            cy.get('#btn-simpan').click()
            if (data.messageValidation) {
                cy.contains(data.messageValidation).should('exist');
            } else {
                cy.reload();
                cy.get('#gambar-generate').should('exist');
            }
        })
    })
})