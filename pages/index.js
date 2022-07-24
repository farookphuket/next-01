import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

        <div>
            <h1 className="mt-12">this is the index page</h1>
            <p>this part  will show the recent what up</p>

            {/* Card START */}
            <div className="grid md:grid-cols-3 gap-10 mt-8">
                {/* the item 1 START */}
                <div className="bg-white p-2 rounded overflow-hidden">
                    <img 

                        src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png" alt="" 
                    />
                    <div>
                        <p>
                            this is my first car I just bought
                        </p>
                    </div>
                </div>
                {/* the item 1 END */}


                {/* the item 2 START */}
                <div>
                    <img src="https://img.autotrader.co.za/14794377" alt="" 
                    />
                    <div>
                        <p>this is the car ha ha </p>
                    </div>
                </div>
                {/* the item 2 END */}

            </div>
            {/* Card START */}

        </div>

    </div>
  )
}
