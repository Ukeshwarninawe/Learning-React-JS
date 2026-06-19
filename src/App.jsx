import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='parent'>
        <Cards Name="Jason duval" game="GTA VI" desc="Jason is a former soldier who possesses high-level tactical skills. Eagle-eyed fans spotted a unit crest tattoo on his left shoulder featuring a skull, a beret, and a commando stiletto knife, hinting at past Special Operations/Army Ranger training" picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tVJiR4VZRyTwC8vAuP0jlTmxl9YNy8_kZV2lWtd56t2eAXFXm0d_UNll&s=10"/>
        <Cards Name="Lucia Caminos" game="GTA VI" desc="Lucia Caminos is one of the two playable protagonists in GTA VI starring alongside her partner-in-crime and boyfriend, Jason Duvall. She makes history as the franchise's first major, fully voiced female protagonist" picture="https://oyster.ignimgs.com/mediawiki/apis.ign.com/gta-6/4/4d/Lucia-caminos-profile.png"/>
        <Cards Name="Arthur Morgan" game="RDR2" desc="Arthur Morgan, the legendary protagonist of Red Dead Redemption 2, is a complex, rugged anti-hero and the primary enforcer of the Van der Linde gang." picture="https://images.alphacoders.com/971/thumb-1920-971362.jpg"/>
        <Cards Name="John Marston" game="RDR2" desc="A former outlaw, his life is defined by his loyalty to his family, his struggles with his violent past, and his inability to swim" picture="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/01/red-dead-redemption-john-marston.jpg"/>
        <Cards Name="Carl Johnson" game="GTA SAN ANDREAS" desc="Carl CJ Johnson is the protagonist of Grand Theft Auto: San Andreas. He is voiced by Young Maylay. Carl is the second-in-command of the Grove Street" picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4st0ypS4gPCEKLQ-pmKVmekHt0aH0mvGV72ia39m6Uw&s"/>
        <Cards Name="Tomy Vercetti" game="GTA VICE CITY" desc="A former mobster for the Forelli crime family, he is best known for his 1980s Miami-inspired aesthetic—typically a blue Hawaiian shirt, white trousers, and sunglasses" picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9oblp_8FxF0sHnIFf2sxUFmw5YYrzVw8ziCy_25QMGJTlcU_hOTWZvpJakpXL6DDAMijITanWT2jFhmStgisfM1ktspPVukcQJGZ7WbQ&s=10"/>
        <Cards Name="Claude" game="GTA 3" desc="Claude is the silent, emotionless protagonist of Grand Theft Auto III. Betrayed by his girlfriend Catalina in Liberty City's criminal underworld" picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCEukUpWYM00e9l0-39kv_c_apzh8Hs1Yab4TuyYOmA&s=10"/>
        {/* 2nd Row */}
        <Cards Name="Niko Belic" game="GTA IV" desc="An Eastern European war veteran who travels to Liberty City seeking the American Dream, he instead gets dragged into the criminal underworld by his cousin, Roman" picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRZsKY-qo7Xzwi2d7ktE4iidXh1thDSDxk82xNROM-vRJ1K1eowQLP22_&s=10"/>
        <Cards Name="Franklin Clinton" game="GTA V" desc=" Born in 1988 in South Los Santos, he is depicted as a young, ambitious street gangster. He desperately wants to break away from the petty, dead-end life of the local street gangs" picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMr2Ybs-caOZJpPcG56I3Hxvbd3O2Y7TC2rcaM9iN4KQ&s"/>
        <Cards Name="Michael" game="GTA V" desc="Michael is a retired 50-something bank robber living in luxury in Rockford Hills, Los Santos, under a secret identity brokered by a corrupt FIB agent" picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXcGdCJCcZ8URVtSdDWBeEEeQ3r2tS_jb8rUkLctFnjQ&s=10"/>
        <Cards Name="Trevor Philips" game="GTA V" desc="He is a criminally insane, volatile career criminal who runs his own drug and weapons smuggling empire called Trevor Philips Enterprises in Blaine County San Andreas" picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKckxAx-FULnc3gWTg_cRQmVHWyKcxdveAKlsXU-eEGg&s=10"/>
        <Cards Name="Kratos" game="GOD OF WAR" desc="Kratos is the legendary protagonist of Santa Monica Studios critically acclaimed God of War video game franchise published by Sony Interactive Entertainment. Known originally as the Ghost of Sparta" picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8K3whkrafa0aD6tTz3pVoMXT3GaAZo4ql0jKNUdF6AA&s=10"/>
        
      </div>
    </div>
  )
}

export default App
