
import 'reflect-metadata'
import {
  jsonObject,
  jsonProperty,
  jsonName,
  Serializable,
  SnakeCaseNamingStrategy,
  KebabCaseNamingStrategy,
  PascalCaseNamingStrategy
} from "ts-serializable";
import { writeFileSync } from 'fs';
import { join } from 'path';


@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class YAKu extends Serializable {
  @jsonName("tgB3fm")
  @jsonProperty([Number])
  private fUA: [number] = [82];

  @jsonName("yhpzR")
  @jsonProperty(String)
  public k7fNdPOynGk: string = "HoHam";

  private mwQoEbl(): number { return 0; };

  public i8nH(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class EOyCwcWk extends Serializable {
  @jsonName("l8lTg6uW99H")
  @jsonProperty([YAKu])
  private vAAM: [YAKu] = [new YAKu()];

  @jsonName("oxC")
  @jsonProperty(YAKu)
  private s51z7s: YAKu = new YAKu();

  @jsonName("gVo")
  @jsonProperty([String], [YAKu], void -5)
  private nP3dgG: [string] | [YAKu] = [new YAKu()];

  public e75yAclmx(): number { return 0; };

  public zCi(): string { return ""; };

  public y7x(): number { return 0; };

  private kXKM(): string { return ""; };

}

@jsonObject({ namingStrategy: new KebabCaseNamingStrategy() })
export class KL3V extends Serializable {
  
  @jsonProperty([YAKu])
  private uKlrcGn: [YAKu] = [new YAKu()];

  @jsonName("aqMmEwegv8t")
  @jsonProperty([EOyCwcWk])
  public oh6: [EOyCwcWk] = [new EOyCwcWk()];

  @jsonName("dzAC")
  @jsonProperty(void 74, [Date])
  private tXH4L7C8nqS: [Date] = [new Date("2093-07-03 07:50:18 UTC")];

  public ypWx(): number { return 0; };

  private ricr8gn(): number { return 0; };

  public dqvVF(): string { return ""; };

}

@jsonObject({ namingStrategy: new KebabCaseNamingStrategy() })
export class P8taL7h extends Serializable {
  @jsonName("hn8BTR")
  @jsonProperty(Date, String, void -98)
  public ccEnyi?: Date | string = void -98;

  @jsonName("jCC0V")
  @jsonProperty(Number, Date)
  public bIzV1Zo: number | Date = -95;

  @jsonName("bnHX4")
  @jsonProperty([Number])
  public urEtCFXD6Do: [number] = [82];

  @jsonName("l3gxS0K7Eb")
  @jsonProperty(void -19, Date, void 14)
  public tr4kritvk?: Date = void 14;

  
  @jsonProperty(void 46)
  public otXVab4?  = void 46;

  public aWFk5(): string { return ""; };

  private rkUyUTDaL(): number { return 0; };

  private lFb(): number { return 0; };

  public dLh7E(): number { return 0; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class HyTZaue extends Serializable {
  @jsonName("heSc")
  @jsonProperty([KL3V])
  public jpROwUx3a: [KL3V] = [new KL3V()];

  @jsonName("omr3")
  @jsonProperty(void -48, void 29, KL3V)
  public ax1KGq?: KL3V = void -48;

  @jsonName("uzgImOoyi")
  @jsonProperty([YAKu], [Number])
  public yP95c9: [YAKu] | [number] = [new YAKu()];

  @jsonName("lmnX3dGS")
  @jsonProperty(String, [String], YAKu)
  public uybU: string | [string] | YAKu = "vvD";

  private gn6l(): string { return ""; };

  private bIfPJBQ(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class LORgNdqHq extends Serializable {
  @jsonName("z0JxIz")
  @jsonProperty([YAKu], [String])
  public ihPc: [YAKu] | [string] = [new YAKu()];

  @jsonName("rGKTToCvP")
  @jsonProperty(String)
  private a3zNePdE: string = "Ig5hWZrFdL";

  @jsonName("bFLcXr1meTD")
  @jsonProperty(void 42, [YAKu])
  public oTHDLC: [YAKu] = [new YAKu()];

  @jsonName("vucJ7")
  @jsonProperty(void 2)
  public pxkyYOUk?  = void 2;

  private yYKbOG(): string { return ""; };

  private iZwE8vZSnq(): string { return ""; };

  private rhPz2nHH(): number { return 0; };

}

@jsonObject({ namingStrategy: new KebabCaseNamingStrategy() })
export class QCakg extends Serializable {
  @jsonName("yuk642Bbqs")
  @jsonProperty(Number, [P8taL7h])
  private eQm6UDJ6: number | [P8taL7h] = [new P8taL7h()];

  @jsonName("xtGf6Il20M")
  @jsonProperty([P8taL7h], Date)
  public t9ZP1i: [P8taL7h] | Date = new Date("2039-04-24 10:59:06 UTC");

  @jsonName("dBFL8")
  @jsonProperty([P8taL7h])
  public w7Vat: [P8taL7h] = [new P8taL7h()];

  
  @jsonProperty(P8taL7h, void 54)
  private gTtpMp: P8taL7h = new P8taL7h();

  public ysaECch(): string { return ""; };

  private wRSHtd1LUv(): string { return ""; };

  public hkdfDGD2pky(): number { return 0; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class JnCIf8FT extends Serializable {
  @jsonName("ia6J")
  @jsonProperty([QCakg])
  public byAx2rqQZ: [QCakg] = [new QCakg()];

  @jsonName("q6t5")
  @jsonProperty(void -40)
  public rLBBJFUycoL?  = void -40;

  @jsonName("ggzI5")
  @jsonProperty(QCakg, [YAKu])
  public xtg2: QCakg | [YAKu] = [new YAKu()];

  private pMYcgu8(): string { return ""; };

  public cEMiTN4Qt(): number { return 0; };

  public tDQT51V(): number { return 0; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class PigcCsW extends Serializable {
  @jsonName("gQpFg")
  @jsonProperty([QCakg], [HyTZaue])
  private dJIu83: [QCakg] | [HyTZaue] = [new HyTZaue()];

  @jsonName("fpql")
  @jsonProperty([String])
  public nACsc: [string] = [""];

  @jsonName("oJp0PZ")
  @jsonProperty([EOyCwcWk])
  private mqc1evXMo: [EOyCwcWk] = [new EOyCwcWk()];

  public qEmT48I(): string { return ""; };

  private usJDVX3IGzh(): string { return ""; };

  private tyH(): string { return ""; };

  public zXiincfR2zl(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class CBKWuYoHR extends Serializable {
  @jsonName("lImYFM1g9p")
  @jsonProperty(Number, LORgNdqHq)
  public zfkozXflKr: number | LORgNdqHq = 16;

  
  @jsonProperty(P8taL7h, [QCakg], LORgNdqHq)
  private x0m: P8taL7h | [QCakg] | LORgNdqHq = new P8taL7h();

  @jsonName("eXvo")
  @jsonProperty([QCakg], [Date])
  public fRrnEau: [QCakg] | [Date] = [new Date("2058-05-13 14:04:34 UTC")];

  public kDUKV(): number { return 0; };

  private svt2LVFhTW(): string { return ""; };

  private bshGn(): string { return ""; };

  public jtWcLspzZ6i(): string { return ""; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class SZdB extends Serializable {
  @jsonName("unCb7u75A")
  @jsonProperty(YAKu)
  public gVWLyq5qOf: YAKu = new YAKu();

  @jsonName("htZ")
  @jsonProperty(EOyCwcWk)
  private lA838Q: EOyCwcWk = new EOyCwcWk();

  @jsonName("uKS1fOM4L")
  @jsonProperty(KL3V)
  private gLmpJbOzK: KL3V = new KL3V();

  @jsonName("s2chAqliep")
  @jsonProperty(P8taL7h)
  public b2feAcTz: P8taL7h = new P8taL7h();

  @jsonName("vx4AOFY")
  @jsonProperty(HyTZaue)
  public tAIzl: HyTZaue = new HyTZaue();

  @jsonName("m4Sed8qD")
  @jsonProperty(LORgNdqHq)
  private vqsM8: LORgNdqHq = new LORgNdqHq();

  @jsonName("wGvLzRKZU")
  @jsonProperty(QCakg)
  private dQ4z: QCakg = new QCakg();

  @jsonName("cDeMvyz")
  @jsonProperty(JnCIf8FT)
  private kCddve: JnCIf8FT = new JnCIf8FT();

  @jsonName("l3G")
  @jsonProperty(PigcCsW)
  public oqSV9BedPW2: PigcCsW = new PigcCsW();

  @jsonName("vzt08f")
  @jsonProperty(CBKWuYoHR)
  public nfvan: CBKWuYoHR = new CBKWuYoHR();

  private cdX4(): string { return ""; };

  private cmzg(): number { return 0; };

  public eagP2SWt(): string { return ""; };

}
const toJSONMessage = "\n\nto JSON\n\n"
console.log(toJSONMessage)

const topToJSON = new SZdB().toJSON()
// console.log(topToJSON)

const fname = "result.txt"

function syncWriteFile(filename: string = fname, data: any) {
  writeFileSync(join(__dirname, filename), JSON.stringify(data, null, 2), {
    flag: 'w',
  });
}

syncWriteFile(fname, toJSONMessage)
syncWriteFile(fname, topToJSON)

const fromJSONMessage = "\n\nfrom JSON\n\n"
console.log(fromJSONMessage)

const topFromJSON = SZdB.fromJSON(topToJSON)

// console.log(topFromJSON)

syncWriteFile(fname, fromJSONMessage)
syncWriteFile(fname, topFromJSON)
      