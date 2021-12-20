import React from 'react';
import Button from 'elements/Button';
import iconText from 'parts/iconText';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width: 350 }}>
                        <iconText />
                        <p className="brand-tagline">
                            Kami jamin liburan anda berkesan.
                        </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2">Untuk Pemula</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type='link' href='/register'>Buat akun baru</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href='/properties'>Mulai pesan kamar</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href='/use-payment'>Pembayaran</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">Jelajahi</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type='link' href='/careers'>Karir</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href='/privacy'>Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type='link' href='/terms'>Peraturan dan kebijakan</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">Kontak</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type='link' href='mailto:support@homesate.com'>support@homesate.com</Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type='link' href='tel:+6281871263'>081-871-263</Button>
                            </li>
                            <li className="list-group-item">
                                <span>HomeSate, Lumajang, Jawa Timur</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyright">
                        Copyright 2021 * All right reserved * HomeSate
                    </div>
                </div>
            </div>
        </footer>
    )
}
