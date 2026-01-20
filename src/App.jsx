import { useEffect, useMemo, useState } from 'react'
import menBlack from './assets/men black.avif'
import menBrown from './assets/men brown.avif'
import menCharcoal from './assets/men charcoal.avif'
import menGrey from './assets/men grey.webp'
import menLightBlack from './assets/men white black.avif'
import menLightBlue from './assets/men whiteblue.avif'
import womenBlackSlim from './assets/Black Slim.webp'
import womenBlackWide from './assets/Black Wide-Leg Jeans with Raw.avif'
import womenBlueBootcut from './assets/Blue Faded Bootcut Jeans.avif'
import womenBlueSkinny from './assets/Blue Rinse Skinny Fit Jeans.avif'
import womenBlush from './assets/Blush Coloured.avif'
import womenLightBlueLoose from './assets/Light Blue Solid Women Loose.avif'
import womenTopBlackEmbroidered from './assets/tops/Black Embroidered Casual Full Sleeves V-Neck Regular Fit Tops.avif'
import womenTopBlackSleevelessKnitPolo from './assets/tops/Black Sleeveless Knit Polo Top.avif'
import womenTopBlackSleevelessOpenKnit from './assets/tops/Black Sleeveless Open Knit Top.avif'
import womenTopPinkTexturedSleeveless from './assets/tops/Pink Textured Casual Sleeveless Round Neck Slim Fit Tops.avif'
import womenTopRustSolidZipperPolo from './assets/tops/Rust Solid Zipper Polo Top.avif'
import womenTopWhitePointelleKnit from './assets/tops/White Pointelle Knit Collared Top.avif'
import womenTrouserAnnabelle from './assets/womentrouser/Annabelle.avif'
import womenTrouserAnnabelleTwo from './assets/womentrouser/Annabelle (2).avif'
import womenTrouserBlackSlimFit from './assets/womentrouser/Black Solid Slim Fit Formal.avif'
import womenTrouserLightGreyLoose from './assets/womentrouser/Light Grey Solid Full Length High Rise Casual Women Loose Fit.avif'
import womenTrouserNavySlimFit from './assets/womentrouser/Navy Solid Slim Fit Formal.avif'
import womenTrouserEcruWideLeg from './assets/womentrouser/People Ecru Wide Leg Utility Pants.avif'
import womenFootwearBeigeBallerinas from './assets/footwear/Beige Solid Casual Ballerinas.avif'
import womenFootwearBrownHeels from './assets/footwear/Brown Solid Party Women Heels.avif'
import womenFootwearCreamFlatsTwo from './assets/footwear/Cream Textured PU Women Flats (2).avif'
import womenFootwearCreamAthleisureShoes from './assets/footwear/Cream Textured Athleisure Women Casual Shoes.avif'
import womenFootwearCreamDoubleStrap from './assets/footwear/Cream Double Strap Buckle.avif'
import womenFootwearLilacBallerinas from './assets/footwear/Lilac Solid Casual Ballerinas.avif'
import menCasualBlackSolidSlimFit from './assets/casualshirts/Black Solid Casual Full Sleeves Shirt Collar Men Slim Fit Casual Shirts.avif'
import menCasualOliveShacket from './assets/casualshirts/Olive Utility Shacket.avif'
import menCasualRustUtilityPocket from './assets/casualshirts/Rust Utility Pocket Shirt.avif'
import menCasualWhiteSolidSlimFit from './assets/casualshirts/White Solid Casual Full Sleeves Shirt Collar Men Slim Fit Casual Shirts.avif'
import menCasualWhiteTexturedRelaxed from './assets/casualshirts/White Textured Casual Full Sleeves Shirt Collar Men Relaxed Fit Casual Shirts.avif'
import menCasualYellowPrintedMandarin from './assets/casualshirts/Yellow Printed Casual Full Sleeves Mandarin Collar Regular Fit Casual Shirts.avif'
import menSuitCharcoalSolid from './assets/suits/Charcoal Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer.avif'
import menSuitNavyCheckedParty from './assets/suits/Navy Checked Party Full Sleeves Shirt Collar Men Slim Fit Blazers.avif'
import menSuitNavySolidFormal from './assets/suits/Navy Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer.avif'
import menSuitNavySolidFormalTwo from './assets/suits/Navy Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer 2.avif'
import menSuitNavyTexturedCasual from './assets/suits/Navy Textured Casual Full Sleeves Shirt Collar Men Slim Fit Blazers.avif'
import menSuitOliveSolidFormal from './assets/suits/Olive Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer.avif'
import menFootwearBlackSlipOn from './assets/menfootwear/Black Slip-On Casual Shoes.avif'
import menFootwearBrownCasual from './assets/menfootwear/Brown Solid Casual Casual Shoes.avif'
import menFootwearBrownPanelled from './assets/menfootwear/Brown Panelled Lace-Up Casual Shoes.avif'
import menFootwearOffWhiteSneakers from './assets/menfootwear/Off White Solid Casual Men Sneakers.avif'
import menFootwearOliveSandals from './assets/menfootwear/Olive Double Strap Sandals.avif'
import menFootwearTanCasual from './assets/menfootwear/Tan Solid Casual Casual Shoes.avif'
import menTshirtBeigeChevronJohnnyPolo from './assets/mentshirts/Beige Chevron Johnny Polo T-Shirt.avif'
import menTshirtBluePatternedJohnnyPolo from './assets/mentshirts/Blue Patterned Johnny Polo T-Shirt.avif'
import menTshirtBrownTexturedEssential from './assets/mentshirts/Brown Textured Full Sleeve Essential T-Shirt.avif'
import menTshirtOffWhiteColorBlockPolo from './assets/mentshirts/Off-White Colour Block Long Sleeve Polo T-Shirt.jpg'
import menTshirtWhitePrintedAthleisureAvif from './assets/mentshirts/White Printed Athleisure Half Sleeves Round Neck Relaxed Fit T-Shirts.avif'
import menTshirtWhitePrintedAthleisureWebp from './assets/mentshirts/White Printed Athleisure Half Sleeves Round Neck Relaxed Fit T-Shirts.webp'
import womenDressBlackAndWhiteTieUp from './assets/dress/Black & White Striped Tie-up Detail High-Low Dress.avif'
import womenDressBlackFloralFitFlare from './assets/dress/Black Floral Print Fit & Flare Midi Dress.avif'
import womenDressBlackStripedBodycon from './assets/dress/Black Striped Knitted Bodycon Midi Dress with Slit.avif'
import womenDressBlueWaistTie from './assets/dress/Blue Waist Tie Puffed Sleeve Mini Dress.avif'
import womenDressBrownStripedMidi from './assets/dress/Brown Striped Midi Shirt Dress.avif'
import womenDressNavyPrintedAboveKnee from './assets/dress/Navy Printed Above Knee Casual Regular Fit Dresses.avif'
import womenShirtBlackCrushUtility from './assets/womenshirts/Black Crush Texture Utility Pocket Shirt.avif'
import womenShirtBlueDenimRelaxed from './assets/womenshirts/Blue Denim Relaxed Fit Shirt.avif'
import womenShirtLilacStripedSatin from './assets/womenshirts/Lilac Striped Satin Shirt.avif'
import womenShirtOffWhiteAbstractResort from './assets/womenshirts/Off-White Abstract Print Resort Shirt.webp'
import womenShirtOffWhiteAquatic from './assets/womenshirts/Off-White Aquatic Print Shirt.avif'
import womenShirtWhiteGraphicResort from './assets/womenshirts/White Graphic Print Resort Shirt.avif'
import blankCityDrapeDress from './assets/forblank/City Drape Dress.jpg'
import blankMid3 from './assets/forblank/mid 3.jpg'
import blankMidNi from './assets/forblank/mid ni.jpg'
import blankMidNight from './assets/forblank/mid night.jpg'
import blankMidnightTwo from './assets/forblank/midnight 2.jpg'
import blankMidnightThree from './assets/forblank/midnight 3.jpg'
import blankMidnightCharcoal from './assets/forblank/mignight charcoal.jpg'
import blankMonochromeKnitSet from './assets/forblank/Monochrome Knit Set.jpg'
import blankSableCrossbody from './assets/forblank/Sable Crossbody.webp'
import blankStoneButtonShirt from './assets/forblank/Stone Button Shirt.webp'
import './App.css'

function App() {
  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const categories = [
    {
      name: 'Men',
      description: 'Tailored layers, matte textures, and midnight accents.',
      items: [
        { label: 'Jeans' },
        { label: 'Trousers' },
        { label: 'Casual shirts' },
        { label: 'Suits' },
        { label: 'Footwear' },
        { label: 'T-shirts' },
      ],
    },
    {
      name: 'Women',
      description: 'Fluid silhouettes with muted sheen and sculpted drape.',
      items: [
        { label: 'Jeans' },
        { label: 'Tops' },
        { label: 'Trousers' },
        { label: 'Footwear' },
        { label: 'Dresses' },
        { label: 'Shirts' },
      ],
    },
    {
      name: 'Essentials',
      description: 'Shared pieces with quiet confidence and soft structure.',
      items: [{ label: 'Capsules' }, { label: 'Accessories' }, { label: 'Denim' }],
    },
  ]

  const products = [
    {
      name: 'Men Jeans - Light Blue',
      price: '2,150 ETB',
      note: 'Slim profile denim with soft stretch for all-day comfort.',
      category: 'Men',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: menLightBlue,
    },
    {
      name: 'Men Jeans - Black',
      price: '2,150 ETB',
      note: 'Deep black denim with a clean matte finish.',
      category: 'Men',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: menBlack,
    },
    {
      name: 'Men Jeans - Light Black',
      price: '2,150 ETB',
      note: 'Washed black denim with a softened fade.',
      category: 'Men',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: menLightBlack,
    },
    {
      name: 'Men Jeans - Brown',
      price: '2,150 ETB',
      note: 'Warm brown denim with subtle texture.',
      category: 'Men',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: menBrown,
    },
    {
      name: 'Men Jeans - Charcoal Acid',
      price: '2,150 ETB',
      note: 'Charcoal wash with a vintage acid finish.',
      category: 'Men',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: menCharcoal,
    },
    {
      name: 'Men Jeans - Grey',
      price: '2,150 ETB',
      note: 'Muted grey denim with tonal stitching.',
      category: 'Men',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: menGrey,
    },
    {
      name: 'Ash Pleat Trousers',
      price: '2,450 ETB',
      note: 'Relaxed fit with crisp pleats and an adjustable waist.',
      category: 'Men',
      subcategory: 'Trousers',
      imageClass: 'image-trousers',
      image: blankMid3,
    },
    {
      name: 'Midnight Casual Shirt',
      price: '1,780 ETB',
      note: 'Soft cotton poplin with tonal buttons and subtle sheen.',
      category: 'Men',
      subcategory: 'Casual shirts',
      imageClass: 'image-casual-shirts',
      image: blankMidNight,
    },
    {
      name:
        'Black Solid Casual Full Sleeves Shirt Collar Men Slim Fit Casual Shirts',
      price: '1,780 ETB',
      note:
        'Black Solid Casual Full Sleeves Shirt Collar Men Slim Fit Casual Shirts',
      category: 'Men',
      subcategory: 'Casual shirts',
      imageClass: 'image-casual-shirts',
      image: menCasualBlackSolidSlimFit,
    },
    {
      name: 'Olive Utility Shacket',
      price: '1,780 ETB',
      note: 'Olive Utility Shacket',
      category: 'Men',
      subcategory: 'Casual shirts',
      imageClass: 'image-casual-shirts',
      image: menCasualOliveShacket,
    },
    {
      name: 'Rust Utility Pocket Shirt',
      price: '1,780 ETB',
      note: 'Rust Utility Pocket Shirt',
      category: 'Men',
      subcategory: 'Casual shirts',
      imageClass: 'image-casual-shirts',
      image: menCasualRustUtilityPocket,
    },
    {
      name:
        'White Solid Casual Full Sleeves Shirt Collar Men Slim Fit Casual Shirts',
      price: '1,780 ETB',
      note:
        'White Solid Casual Full Sleeves Shirt Collar Men Slim Fit Casual Shirts',
      category: 'Men',
      subcategory: 'Casual shirts',
      imageClass: 'image-casual-shirts',
      image: menCasualWhiteSolidSlimFit,
    },
    {
      name:
        'White Textured Casual Full Sleeves Shirt Collar Men Relaxed Fit Casual Shirts',
      price: '1,780 ETB',
      note:
        'White Textured Casual Full Sleeves Shirt Collar Men Relaxed Fit Casual Shirts',
      category: 'Men',
      subcategory: 'Casual shirts',
      imageClass: 'image-casual-shirts',
      image: menCasualWhiteTexturedRelaxed,
    },
    {
      name:
        'Yellow Printed Casual Full Sleeves Mandarin Collar Regular Fit Casual Shirts',
      price: '1,780 ETB',
      note:
        'Yellow Printed Casual Full Sleeves Mandarin Collar Regular Fit Casual Shirts',
      category: 'Men',
      subcategory: 'Casual shirts',
      imageClass: 'image-casual-shirts',
      image: menCasualYellowPrintedMandarin,
    },
    {
      name: 'Shadowline Suit Set',
      price: '3,900 ETB',
      note: 'Structured suit with a clean matte finish.',
      category: 'Men',
      subcategory: 'Suits',
      imageClass: 'image-suits',
      image: blankMidnightTwo,
    },
    {
      name: 'Charcoal Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer',
      price: '3,900 ETB',
      note: 'Charcoal Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer',
      category: 'Men',
      subcategory: 'Suits',
      imageClass: 'image-suits',
      image: menSuitCharcoalSolid,
    },
    {
      name: 'Navy Checked Party Full Sleeves Shirt Collar Men Slim Fit Blazers',
      price: '3,900 ETB',
      note: 'Navy Checked Party Full Sleeves Shirt Collar Men Slim Fit Blazers',
      category: 'Men',
      subcategory: 'Suits',
      imageClass: 'image-suits',
      image: menSuitNavyCheckedParty,
    },
    {
      name: 'Navy Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer',
      price: '3,900 ETB',
      note: 'Navy Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer',
      category: 'Men',
      subcategory: 'Suits',
      imageClass: 'image-suits',
      image: menSuitNavySolidFormal,
    },
    {
      name: 'Navy Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer 2',
      price: '3,900 ETB',
      note: 'Navy Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer 2',
      category: 'Men',
      subcategory: 'Suits',
      imageClass: 'image-suits',
      image: menSuitNavySolidFormalTwo,
    },
    {
      name: 'Navy Textured Casual Full Sleeves Shirt Collar Men Slim Fit Blazers',
      price: '3,900 ETB',
      note: 'Navy Textured Casual Full Sleeves Shirt Collar Men Slim Fit Blazers',
      category: 'Men',
      subcategory: 'Suits',
      imageClass: 'image-suits',
      image: menSuitNavyTexturedCasual,
    },
    {
      name: 'Olive Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer',
      price: '3,900 ETB',
      note: 'Olive Solid Formal Full Sleeves Shirt Collar Men Slim Fit Blazer',
      category: 'Men',
      subcategory: 'Suits',
      imageClass: 'image-suits',
      image: menSuitOliveSolidFormal,
    },
    {
      name: 'Onyx City Sneakers',
      price: '2,900 ETB',
      note: 'Minimal low-top profile with cushioned lining.',
      category: 'Men',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: blankMidnightThree,
    },
    {
      name: 'Black Slip-On Casual Shoes',
      price: '2,900 ETB',
      note: 'Black Slip-On Casual Shoes',
      category: 'Men',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: menFootwearBlackSlipOn,
    },
    {
      name: 'Brown Solid Casual Casual Shoes',
      price: '2,900 ETB',
      note: 'Brown Solid Casual Casual Shoes',
      category: 'Men',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: menFootwearBrownCasual,
    },
    {
      name: 'Brown Panelled Lace-Up Casual Shoes',
      price: '2,900 ETB',
      note: 'Brown Panelled Lace-Up Casual Shoes',
      category: 'Men',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: menFootwearBrownPanelled,
    },
    {
      name: 'Off White Solid Casual Men Sneakers',
      price: '2,900 ETB',
      note: 'Off White Solid Casual Men Sneakers',
      category: 'Men',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: menFootwearOffWhiteSneakers,
    },
    {
      name: 'Olive Double Strap Sandals',
      price: '2,900 ETB',
      note: 'Olive Double Strap Sandals',
      category: 'Men',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: menFootwearOliveSandals,
    },
    {
      name: 'Tan Solid Casual Casual Shoes',
      price: '2,900 ETB',
      note: 'Tan Solid Casual Casual Shoes',
      category: 'Men',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: menFootwearTanCasual,
    },
    {
      name: 'Monochrome Tee Pack',
      price: '1,250 ETB',
      note: 'Two-pack tees in black and bone with a soft hand feel.',
      category: 'Men',
      subcategory: 'T-shirts',
      imageClass: 'image-tshirts',
      image: blankMidNi,
    },
    {
      name: 'Beige Chevron Johnny Polo T-Shirt',
      price: '1,250 ETB',
      note: 'Beige Chevron Johnny Polo T-Shirt',
      category: 'Men',
      subcategory: 'T-shirts',
      imageClass: 'image-tshirts',
      image: menTshirtBeigeChevronJohnnyPolo,
    },
    {
      name: 'Blue Patterned Johnny Polo T-Shirt',
      price: '1,250 ETB',
      note: 'Blue Patterned Johnny Polo T-Shirt',
      category: 'Men',
      subcategory: 'T-shirts',
      imageClass: 'image-tshirts',
      image: menTshirtBluePatternedJohnnyPolo,
    },
    {
      name: 'Brown Textured Full Sleeve Essential T-Shirt',
      price: '1,250 ETB',
      note: 'Brown Textured Full Sleeve Essential T-Shirt',
      category: 'Men',
      subcategory: 'T-shirts',
      imageClass: 'image-tshirts',
      image: menTshirtBrownTexturedEssential,
    },
    {
      name: 'Off-White Colour Block Long Sleeve Polo T-Shirt',
      price: '1,250 ETB',
      note: 'Off-White Colour Block Long Sleeve Polo T-Shirt',
      category: 'Men',
      subcategory: 'T-shirts',
      imageClass: 'image-tshirts',
      image: menTshirtOffWhiteColorBlockPolo,
    },
    {
      name:
        'White Printed Athleisure Half Sleeves Round Neck Relaxed Fit T-Shirts (avif)',
      price: '1,250 ETB',
      note:
        'White Printed Athleisure Half Sleeves Round Neck Relaxed Fit T-Shirts (avif)',
      category: 'Men',
      subcategory: 'T-shirts',
      imageClass: 'image-tshirts',
      image: menTshirtWhitePrintedAthleisureAvif,
    },
    {
      name:
        'White Printed Athleisure Half Sleeves Round Neck Relaxed Fit T-Shirts (webp)',
      price: '1,250 ETB',
      note:
        'White Printed Athleisure Half Sleeves Round Neck Relaxed Fit T-Shirts (webp)',
      category: 'Men',
      subcategory: 'T-shirts',
      imageClass: 'image-tshirts',
      image: menTshirtWhitePrintedAthleisureWebp,
    },
    {
      name: 'Light Blue Solid Women Loose',
      price: '2,300 ETB',
      note: 'High-rise denim with soft contour and matte hardware.',
      category: 'Women',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: womenLightBlueLoose,
    },
    {
      name: 'Black Slim',
      price: '2,300 ETB',
      note: 'Deep black denim with a sculpted fit.',
      category: 'Women',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: womenBlackSlim,
    },
    {
      name: 'Black Wide-Leg Jeans with Raw',
      price: '2,300 ETB',
      note: 'Soft wash with a relaxed silhouette.',
      category: 'Women',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: womenBlackWide,
    },
    {
      name: 'Blue Faded Bootcut Jeans',
      price: '2,300 ETB',
      note: 'Warm brown denim with refined seams.',
      category: 'Women',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: womenBlueBootcut,
    },
    {
      name: 'Blue Rinse Skinny Fit Jeans',
      price: '2,300 ETB',
      note: 'Charcoal wash with a vintage finish.',
      category: 'Women',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: womenBlueSkinny,
    },
    {
      name: 'Blush Coloured',
      price: '2,300 ETB',
      note: 'Muted grey denim with tonal stitching.',
      category: 'Women',
      subcategory: 'Jeans',
      imageClass: 'image-jeans',
      image: womenBlush,
    },
    {
      name: 'Alabaster Knit Top',
      price: '1,650 ETB',
      note: 'Lightweight ribbed knit with refined neckline.',
      category: 'Women',
      subcategory: 'Tops',
      imageClass: 'image-tops',
    },
    {
      name: 'Black Embroidered Casual Full Sleeves V-Neck Regular Fit Tops',
      price: '1,650 ETB',
      note: 'Black Embroidered Casual Full Sleeves V-Neck Regular Fit Tops',
      category: 'Women',
      subcategory: 'Tops',
      imageClass: 'image-tops',
      image: womenTopBlackEmbroidered,
    },
    {
      name: 'Black Sleeveless Knit Polo Top',
      price: '1,650 ETB',
      note: 'Black Sleeveless Knit Polo Top',
      category: 'Women',
      subcategory: 'Tops',
      imageClass: 'image-tops',
      image: womenTopBlackSleevelessKnitPolo,
    },
    {
      name: 'Black Sleeveless Open Knit Top',
      price: '1,650 ETB',
      note: 'Black Sleeveless Open Knit Top',
      category: 'Women',
      subcategory: 'Tops',
      imageClass: 'image-tops',
      image: womenTopBlackSleevelessOpenKnit,
    },
    {
      name: 'Pink Textured Casual Sleeveless Round Neck Slim Fit Tops',
      price: '1,650 ETB',
      note: 'Pink Textured Casual Sleeveless Round Neck Slim Fit Tops',
      category: 'Women',
      subcategory: 'Tops',
      imageClass: 'image-tops',
      image: womenTopPinkTexturedSleeveless,
    },
    {
      name: 'Rust Solid Zipper Polo Top',
      price: '1,650 ETB',
      note: 'Rust Solid Zipper Polo Top',
      category: 'Women',
      subcategory: 'Tops',
      imageClass: 'image-tops',
      image: womenTopRustSolidZipperPolo,
    },
    {
      name: 'White Pointelle Knit Collared Top',
      price: '1,650 ETB',
      note: 'White Pointelle Knit Collared Top',
      category: 'Women',
      subcategory: 'Tops',
      imageClass: 'image-tops',
      image: womenTopWhitePointelleKnit,
    },
    {
      name: 'Softline Trousers',
      price: '2,400 ETB',
      note: 'Wide-leg drape with a smooth, muted finish.',
      category: 'Women',
      subcategory: 'Trousers',
      imageClass: 'image-trousers',
    },
    {
      name: 'Annabelle',
      price: '2,400 ETB',
      note: 'Annabelle',
      category: 'Women',
      subcategory: 'Trousers',
      imageClass: 'image-trousers',
      image: womenTrouserAnnabelle,
    },
    {
      name: 'Annabelle (2)',
      price: '2,400 ETB',
      note: 'Annabelle (2)',
      category: 'Women',
      subcategory: 'Trousers',
      imageClass: 'image-trousers',
      image: womenTrouserAnnabelleTwo,
    },
    {
      name: 'Black Solid Slim Fit Formal',
      price: '2,400 ETB',
      note: 'Black Solid Slim Fit Formal',
      category: 'Women',
      subcategory: 'Trousers',
      imageClass: 'image-trousers',
      image: womenTrouserBlackSlimFit,
    },
    {
      name: 'Light Grey Solid Full Length High Rise Casual Women Loose Fit',
      price: '2,400 ETB',
      note: 'Light Grey Solid Full Length High Rise Casual Women Loose Fit',
      category: 'Women',
      subcategory: 'Trousers',
      imageClass: 'image-trousers',
      image: womenTrouserLightGreyLoose,
    },
    {
      name: 'Navy Solid Slim Fit Formal',
      price: '2,400 ETB',
      note: 'Navy Solid Slim Fit Formal',
      category: 'Women',
      subcategory: 'Trousers',
      imageClass: 'image-trousers',
      image: womenTrouserNavySlimFit,
    },
    {
      name: 'People Ecru Wide Leg Utility Pants',
      price: '2,400 ETB',
      note: 'People Ecru Wide Leg Utility Pants',
      category: 'Women',
      subcategory: 'Trousers',
      imageClass: 'image-trousers',
      image: womenTrouserEcruWideLeg,
    },
    {
      name: 'Noir Heel Boots',
      price: '3,200 ETB',
      note: 'Sculpted heel with minimal seams and a sleek toe.',
      category: 'Women',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
    },
    {
      name: 'Beige Solid Casual Ballerinas',
      price: '3,200 ETB',
      note: 'Beige Solid Casual Ballerinas',
      category: 'Women',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: womenFootwearBeigeBallerinas,
    },
    {
      name: 'Brown Solid Party Women Heels',
      price: '3,200 ETB',
      note: 'Brown Solid Party Women Heels',
      category: 'Women',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: womenFootwearBrownHeels,
    },
    {
      name: 'Cream Textured PU Women Flats (2)',
      price: '3,200 ETB',
      note: 'Cream Textured PU Women Flats (2)',
      category: 'Women',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: womenFootwearCreamFlatsTwo,
    },
    {
      name: 'Cream Textured Athleisure Women Casual Shoes',
      price: '3,200 ETB',
      note: 'Cream Textured Athleisure Women Casual Shoes',
      category: 'Women',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: womenFootwearCreamAthleisureShoes,
    },
    {
      name: 'Cream Double Strap Buckle',
      price: '3,200 ETB',
      note: 'Cream Double Strap Buckle',
      category: 'Women',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: womenFootwearCreamDoubleStrap,
    },
    {
      name: 'Lilac Solid Casual Ballerinas',
      price: '3,200 ETB',
      note: 'Lilac Solid Casual Ballerinas',
      category: 'Women',
      subcategory: 'Footwear',
      imageClass: 'image-footwear',
      image: womenFootwearLilacBallerinas,
    },
    {
      name: 'City Drape Dress',
      price: '2,800 ETB',
      note: 'Bias cut, muted graphite with a fluid swing.',
      category: 'Women',
      subcategory: 'Dresses',
      imageClass: 'image-dresses',
      image: blankCityDrapeDress,
    },
    {
      name: 'Black & White Striped Tie-up Detail High-Low Dress',
      price: '2,800 ETB',
      note: 'Black & White Striped Tie-up Detail High-Low Dress',
      category: 'Women',
      subcategory: 'Dresses',
      imageClass: 'image-dresses',
      image: womenDressBlackAndWhiteTieUp,
    },
    {
      name: 'Black Floral Print Fit & Flare Midi Dress',
      price: '2,800 ETB',
      note: 'Black Floral Print Fit & Flare Midi Dress',
      category: 'Women',
      subcategory: 'Dresses',
      imageClass: 'image-dresses',
      image: womenDressBlackFloralFitFlare,
    },
    {
      name: 'Black Striped Knitted Bodycon Midi Dress with Slit',
      price: '2,800 ETB',
      note: 'Black Striped Knitted Bodycon Midi Dress with Slit',
      category: 'Women',
      subcategory: 'Dresses',
      imageClass: 'image-dresses',
      image: womenDressBlackStripedBodycon,
    },
    {
      name: 'Blue Waist Tie Puffed Sleeve Mini Dress',
      price: '2,800 ETB',
      note: 'Blue Waist Tie Puffed Sleeve Mini Dress',
      category: 'Women',
      subcategory: 'Dresses',
      imageClass: 'image-dresses',
      image: womenDressBlueWaistTie,
    },
    {
      name: 'Brown Striped Midi Shirt Dress',
      price: '2,800 ETB',
      note: 'Brown Striped Midi Shirt Dress',
      category: 'Women',
      subcategory: 'Dresses',
      imageClass: 'image-dresses',
      image: womenDressBrownStripedMidi,
    },
    {
      name: 'Navy Printed Above Knee Casual Regular Fit Dresses',
      price: '2,800 ETB',
      note: 'Navy Printed Above Knee Casual Regular Fit Dresses',
      category: 'Women',
      subcategory: 'Dresses',
      imageClass: 'image-dresses',
      image: womenDressNavyPrintedAboveKnee,
    },
    {
      name: 'Stone Button Shirt',
      price: '1,980 ETB',
      note: 'Relaxed shirt with soft collar and tonal stitching.',
      category: 'Women',
      subcategory: 'Shirts',
      imageClass: 'image-shirts',
      image: blankStoneButtonShirt,
    },
    {
      name: 'Black Crush Texture Utility Pocket Shirt',
      price: '1,980 ETB',
      note: 'Black Crush Texture Utility Pocket Shirt',
      category: 'Women',
      subcategory: 'Shirts',
      imageClass: 'image-shirts',
      image: womenShirtBlackCrushUtility,
    },
    {
      name: 'Blue Denim Relaxed Fit Shirt',
      price: '1,980 ETB',
      note: 'Blue Denim Relaxed Fit Shirt',
      category: 'Women',
      subcategory: 'Shirts',
      imageClass: 'image-shirts',
      image: womenShirtBlueDenimRelaxed,
    },
    {
      name: 'Lilac Striped Satin Shirt',
      price: '1,980 ETB',
      note: 'Lilac Striped Satin Shirt',
      category: 'Women',
      subcategory: 'Shirts',
      imageClass: 'image-shirts',
      image: womenShirtLilacStripedSatin,
    },
    {
      name: 'Off-White Abstract Print Resort Shirt',
      price: '1,980 ETB',
      note: 'Off-White Abstract Print Resort Shirt',
      category: 'Women',
      subcategory: 'Shirts',
      imageClass: 'image-shirts',
      image: womenShirtOffWhiteAbstractResort,
    },
    {
      name: 'Off-White Aquatic Print Shirt',
      price: '1,980 ETB',
      note: 'Off-White Aquatic Print Shirt',
      category: 'Women',
      subcategory: 'Shirts',
      imageClass: 'image-shirts',
      image: womenShirtOffWhiteAquatic,
    },
    {
      name: 'White Graphic Print Resort Shirt',
      price: '1,980 ETB',
      note: 'White Graphic Print Resort Shirt',
      category: 'Women',
      subcategory: 'Shirts',
      imageClass: 'image-shirts',
      image: womenShirtWhiteGraphicResort,
    },
    {
      name: 'Monochrome Knit Set',
      price: '3,200 ETB',
      note: 'Soft merino set with ribbed texture and subtle contrast.',
      category: 'Essentials',
      subcategory: 'Capsules',
      imageClass: 'image-capsules',
      image: blankMonochromeKnitSet,
    },
    {
      name: 'Sable Crossbody',
      price: '1,850 ETB',
      note: 'Minimal leather with tonal strap and brushed hardware.',
      category: 'Essentials',
      subcategory: 'Accessories',
      imageClass: 'image-accessories',
      image: blankSableCrossbody,
    },
    {
      name: 'Charcoal Denim Wrap',
      price: '2,100 ETB',
      note: 'Versatile denim layer for travel and city nights.',
      category: 'Essentials',
      subcategory: 'Denim',
      imageClass: 'image-denim',
      image: blankMidnightCharcoal,
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSubcategory, setSelectedSubcategory] = useState('All')
  const [wishlist, setWishlist] = useState(() => new Set())
  const [selectedSizes, setSelectedSizes] = useState({})
  const [theme, setTheme] = useState('light')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  const filteredProducts = useMemo(() => {
    let next = products
    if (selectedCategory !== 'All') {
      next = next.filter((product) => product.category === selectedCategory)
    }
    if (selectedSubcategory !== 'All') {
      next = next.filter((product) => product.subcategory === selectedSubcategory)
    }
    return next
  }, [products, selectedCategory, selectedSubcategory])

  const wishlistItems = useMemo(
    () => products.filter((product) => wishlist.has(product.name)),
    [products, wishlist]
  )

  const handleCategorySelect = (category, subcategory = 'All') => {
    setSelectedCategory(category)
    setSelectedSubcategory(subcategory)
    const target = document.getElementById('collections')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleWishlist = (name) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(name)) {
        next.delete(name)
      } else {
        next.add(name)
      }
      return next
    })
  }

  const handleSizeChange = (name, value) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="page">
      {isLoading && (
        <div className="loading-overlay" role="status" aria-live="polite">
          <div className="loading-card">
            <span className="loading-spinner" aria-hidden="true" />
            <div>
              <p className="loading-title">Loading lookbook</p>
              <p className="loading-subtitle">Warming up the drop...</p>
            </div>
          </div>
        </div>
      )}
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">ZF</span>
            <div>
              <p className="brand-name">Zenach Fashion</p>
              <p className="brand-tag amharic">ዘናጭ ፋሽን</p>
              <p className="brand-tag">Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="nav-links">
            <a href="#collections">
              Collections
              <span className="nav-translate amharic">ስብስቦች</span>
            </a>
            <a href="#categories">
              Categories
              <span className="nav-translate amharic">ምድቦች</span>
            </a>
            <a href="#atelier">
              Atelier
              <span className="nav-translate amharic">ስራ ማዕከል</span>
            </a>
            <a href="#contact">
              Contact
              <span className="nav-translate amharic">አድራሻ</span>
            </a>
          </div>
          <div className="nav-actions">
            <button
              className="nav-toggle"
              type="button"
              onClick={() =>
                setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
              }
            >
              {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </button>
            <button className="nav-cta" type="button">
              Visit Atelier
            </button>
          </div>
        </nav>

        <section className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Modern Ethiopian fashion house</p>
            <h1>Black. White. Muted. A deliberate wardrobe for city life.</h1>
            <p className="hero-subtitle">
              Zenach Fashion curates menswear and womenswear with sculpted
              silhouettes, clean tailoring, and tonal palettes inspired by Addis
              Ababa&apos;s modern rhythm.
            </p>
            <div className="hero-actions">
              <button className="primary" type="button">
                Shop the new drop
              </button>
              <button className="ghost" type="button">
                Book a styling visit
              </button>
            </div>
            <div className="hero-metrics">
              <div>
                <p className="metric-value">18</p>
                <p className="metric-label">Seasonal looks</p>
              </div>
              <div>
                <p className="metric-value">3</p>
                <p className="metric-label">Craft studios</p>
              </div>
              <div>
                <p className="metric-value">100%</p>
                <p className="metric-label">Local makers</p>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <p className="panel-title">Zenach Drop 06</p>
              <p className="panel-subtitle">Graphite layers with alabaster shine.</p>
              <div className="panel-grid">
                <button
                  className="panel-tile"
                  type="button"
                  onClick={() => handleCategorySelect('Men')}
                >
                  <p>Men</p>
                  <span>09 looks</span>
                </button>
                <button
                  className="panel-tile"
                  type="button"
                  onClick={() => handleCategorySelect('Women')}
                >
                  <p>Women</p>
                  <span>12 looks</span>
                </button>
                <button
                  className="panel-tile"
                  type="button"
                  onClick={() => handleCategorySelect('Essentials')}
                >
                  <p>Essentials</p>
                  <span>06 pieces</span>
                </button>
              </div>
              <button
                className="panel-action"
                type="button"
                onClick={() => {
                  const target = document.getElementById('collections')
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                Explore lookbook
              </button>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section reveal" id="categories">
          <div className="section-head">
            <h2>Categories</h2>
            <p>
              Balanced lines and muted tones designed for confident men and
              women with a shared love of minimalism.
            </p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article className="category-card" key={category.name}>
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
                <ul className="category-items">
                  {category.items.map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect(category.name, item.label)}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className="text-button"
                  type="button"
                  onClick={() => handleCategorySelect(category.name)}
                >
                  View {category.name}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section muted" id="collections">
          <div className="section-head">
            <h2>Featured pieces</h2>
            <p>
              The seasonal capsule blends monochrome foundations with soft,
              tactile layers. Designed to move from morning to night.
            </p>
            <div className="filters">
              {['All', 'Men', 'Women', 'Essentials'].map((label) => (
                <button
                  key={label}
                  className={`filter-pill${
                    selectedCategory === label ? ' is-active' : ''
                  }`}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(label)
                    setSelectedSubcategory('All')
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="wishlist-panel">
            <div className="wishlist-head">
              <h3>Your wishlist</h3>
              <span>{wishlist.size} saved</span>
            </div>
            {wishlist.size === 0 ? (
              <p className="wishlist-empty">
                Save items to build your styling shortlist.
              </p>
            ) : (
              <>
                <div className="wishlist-grid">
                  {wishlistItems.map((product) => (
                    <div className="wishlist-item" key={product.name}>
                      <p className="wishlist-name">{product.name}</p>
                      <p className="wishlist-meta">
                        {product.category} Aú {product.subcategory}
                      </p>
                      <p className="wishlist-meta">
                        Size: {selectedSizes[product.name] || 'N/A'}
                      </p>
                      <a className="price-call" href="tel:+251928638430">
                        Call for price
                      </a>
                      <button
                        className="text-button"
                        type="button"
                        onClick={() => toggleWishlist(product.name)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="wishlist-summary">
                  <div>
                    <p className="summary-label">Items</p>
                    <p className="summary-value">{wishlistItems.length}</p>
                  </div>
                  <div>
                    <p className="summary-label">Pricing</p>
                    <p className="summary-value">Call for price</p>
                  </div>
                  <a className="primary request-link" href="tel:+251928638430">
                    Call for price
                  </a>
                  <a
                    className="ghost request-link"
                    href={`mailto:zenachfashionn@gmail.com?subject=${encodeURIComponent(
                      'Zenach Fashion Order Request'
                    )}&body=${encodeURIComponent(
                      `Hello Zenach Fashion,

I would like to request the following items:
${wishlistItems
                        .map(
                          (item) =>
                            `- ${item.name} Size: ${
                              selectedSizes[item.name] || 'N/A'
                            }`
                        )
                        .join('\n')}

Thank you.`
                    )}`}
                  >
                    Request order
                  </a>
                </div>
              </>
            )}
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.name}>
                {product.image ? (
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                ) : (
                  <div
                    className={`product-image ${product.imageClass}`}
                    aria-hidden="true"
                  />
                )}
                <div className="product-top">
                  <p className="product-name">{product.name}</p>
                  <a className="price-call" href="tel:+251928638430">
                    Call for price
                  </a>
                </div>
                <p className="product-note">{product.note}</p>
                <div className="product-size">
                  <label htmlFor={`size-${product.name.replace(/\s+/g, '-')}`}>
                    Size
                  </label>
                  <select
                    id={`size-${product.name.replace(/\s+/g, '-')}`}
                    name="size"
                    value={selectedSizes[product.name] || ''}
                    onChange={(event) =>
                      handleSizeChange(product.name, event.target.value)
                    }
                  >
                    <option value="" disabled>
                      Select size
                    </option>
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                {product.colors && (
                  <div className="color-chips">
                    {product.colors.map((color) => (
                      <span key={color} className="color-chip">
                        {color}
                      </span>
                    ))}
                  </div>
                )}
                <button
                  className="text-button"
                  type="button"
                  onClick={() => toggleWishlist(product.name)}
                  aria-pressed={wishlist.has(product.name)}
                >
                  {wishlist.has(product.name)
                    ? 'Remove from wishlist'
                    : 'Add to wishlist'}
                </button>
              </article>
            ))}
            {filteredProducts.length === 0 && (
              <div className="empty-state">
                <p>No items yet for this selection. Check back soon.</p>
              </div>
            )}
          </div>
        </section>

        <section className="section split" id="atelier">
          <div>
            <h2>Atelier in Addis Ababa</h2>
            <p>
              Each Zenach piece is cut and finished in our Addis Ababa studio.
              We collaborate with local artisans to elevate Ethiopian
              craftsmanship through contemporary silhouettes.
            </p>
            <div className="atelier-points">
              <div>
                <h4>Design ethos</h4>
                <p>Precise tailoring, soft volume, and purposeful layers.</p>
              </div>
              <div>
                <h4>Materials</h4>
                <p>Organic cotton, brushed wool, and hand-finished leather.</p>
              </div>
              <div>
                <h4>Styling studio</h4>
                <p>Private fittings for men and women, by appointment.</p>
              </div>
            </div>
          </div>
          <div className="atelier-card">
            <p className="eyebrow">Visit us</p>
            <h3>Hayahulet District</h3>
            <p className="atelier-address">
              Ring Road, Addis Ababa, Ethiopia
            </p>
            <div className="atelier-hours">
              <span>Mon-Sat</span>
              <span>10:00 - 19:00</span>
            </div>
            <button className="primary" type="button">
              Schedule a fitting
            </button>
          </div>
        </section>

        <section className="section theme-toggle" id="theme">
          <div>
            <h2>Dark mode</h2>
            <p>
              Shift the lookbook to a deep, midnight palette for low-light
              browsing.
            </p>
          </div>
          <button
            className="primary"
            type="button"
            onClick={() =>
              setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
            }
          >
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
          </button>
        </section>

        <section className="section callout" id="contact">
          <div>
            <h2>Stay in the monochrome</h2>
            <p>
              Receive styling notes, new arrivals, and the latest Addis Ababa
              lookbook drops.
            </p>
            <div className="contact-lines">
              <p>Phone: +251 928 638 430 / 0924373521</p>
              <p>Email: zenachfashionn@gmail.com</p>
            </div>
          </div>
          <form className="newsletter">
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
            />
            <button className="primary" type="button">
              Join the list
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="brand-name">Zenach Fashion</p>
          <p className="brand-tag amharic">ዘናጭ ፋሽን</p>
          <p className="brand-tag">Addis Ababa, Ethiopia</p>
          <p className="footer-contact">+251 928 638 430 Aú 0924373521</p>
          <p className="footer-contact">zenachfashionn@gmail.com</p>
        </div>
        <div className="footer-links">
          <span>Instagram</span>
          <span>Lookbook</span>
          <span>Wholesale</span>
        </div>
        <p className="footer-note">(c) 2026 Zenach Fashion. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

