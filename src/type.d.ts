export interface Sub {
    nick:string 
    avatar:string
    subMonths:number
    description?:string
}

export interface Personaje {
    name: string,
    age : number,
    level : number,
    mana : number,
    atack : number,
    clase : string,
    state: string
}

export interface Agents {
    uuid : string
    displayName:string
    description :string
    developerName : string
    characterTags? : Array<string>
    displayIcon : string
    displayIconSmall : string
    bustPortrait : string
    fullPortrait : string
    fullPortraitV2 : string
    killfeedPortrait : string
    background? : string
    backgroundGradientColors? : Array<string>
    assetPath : string
    isFullPortraitRightFacing : boolean
    isPlayableCharacter : boolean
    isAvailableForTest : boolean
    isBaseContent : boolean
    role? : Role
    abilities : Array<Abilities>
    voiceLine : VoiceLine  

}

interface Role {
    uuid? : string
    displayName? : string
    description?: string 
    displayIcon? : string
    assetPath?  : string  
}

interface Abilities {
    slot : string
    displayName :string 
    description :string 
    displayIcon :string
}
interface VoiceLine {
    minDuration : number
    maxDuration : number
    mediaList : Array<MediaList>
}

interface MediaList {
    id : number
    wwise :string
    wave : string
}

//Weapon 
export interface Weapon {
    uuid: string
    displayName: string
    category: string
    defaultSkinUuid: string
    displayIcon: string
    killStreamIcon: string
    assetPath: string
    weaponStats: WeaponStats
    shopData: ShopData
    skins: Array<Skins>
}

interface Skins {
    uuid: string
    displayName: string
    themeUuid: string
    contentTierUuid: string
    displayIcon: string
    wallpaper: string
    assetPath: string
    chromas: Array<Chromas> 
    levels: Array<Levels>
}

interface Levels {
    uuid: string
    displayName: string 
    levelItem: string
    displayIcon: string
    streamedVideo: string
    assetPath: string
}

interface Chromas {
    uuid: string
    displayName: string 
    displayIcon: string
    fullRender: string
    swatch: string
    streamedVideo: string
    assetPath: string
}

interface ShopData {
    cost: number
    category: string
    categoryText: string
    gridPosition: GridPosition
    canBeTrashed: boolean
    image: string
    newImage: string
    newImage2: string
    assetPath: string
}

interface GridPosition {
    row: number
    column: number
}
interface WeaponStats{
    fireRate: number
    magazineSize: number
    runSpeedMultiplier: number
    equipTimeSeconds: number
    reloadTimeSeconds: number
    firstBulletAccuracy: number
    shotgunPelletCount: number
    wallPenetration: string
    feature: string
    fireMode: string
    altFireType: string
    adsStats: AdsStats 
    altShotgunStats: AltShotgunStats
    airBurstStats: AirBurstStats
    damageRanges: Array<DamageRanges>  
}

interface AdsStats {
    zoomMultiplier: number
    fireRate: number
    runSpeedMultiplier: number
    burstCount: number
    firstBulletAccuracy:number
}

interface AltShotgunStats {
    shotgunPelletCount:number
    burstRate: number
}

interface AirBurstStats {
    shotgunPelletCount: number
    burstDistance: number
}

interface DamageRanges {
    rangeStartMeters:number
    rangeEndMeters:number
    headDamage: number
    bodyDamage: number
    legDamage: number
}


//Sprays

interface Spray {
    uuid: string
    displayName: string
    category: string
    themeUuid: string
    displayIcon: string
    fullIcon:string
    fullTransparentIcon: string
    animationPng:string
    animationGif:string
    assetPath: string
    levels : Level
}

interface Level {
    uuid :string
    sprayLevel :number
    displayName: string 
    displayIcon: string
    assetPath: string 
}




//tiers 

export interface Clasification {
    uuid : string
    assetObjectName:  string
    tiers: Array<Tier>

}
//solo se guarda definiciones en variable.d.ts

interface Tier {
    tier: number
    tierName: string
    division: string
    divisionName: string
    color: string
    backgroundColor: string
    smallIcon: string
    largeIcon: string
    rankTriangleDownIcon: string
    rankTriangleUpIcon: string
    assetPath: string
}