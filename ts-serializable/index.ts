
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


@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class WrDsJ extends Serializable {
  @jsonName("twMWCK6Vd")
  @jsonProperty(void -70, String)
  public afS: string = "ke";

  @jsonName("cuzSwI")
  @jsonProperty([String], void -49, void 6)
  private qKuXkJage?: [string] = void 6;

  @jsonName("tuqfPt896")
  @jsonProperty(void 88, String)
  private jRy7BAUM: string = "ZpJZef";

  private qRAWoT(): number { return 0; };

  public oOg(): string { return ""; };

  private uvRss(): number { return 0; };

  public oXv0tq(): string { return ""; };

  public zzOVOZGXv(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class Soa5Koq extends Serializable {
  @jsonName("tVbnxp5Os")
  @jsonProperty(String)
  private xGYI7UFlr: string = "T";

  @jsonName("vIe")
  @jsonProperty([WrDsJ])
  private rt5u4: [WrDsJ] = [new WrDsJ()];

  @jsonName("oGZhocw0")
  @jsonProperty(WrDsJ)
  private vLG: WrDsJ = new WrDsJ();

  @jsonName("b8Wb")
  @jsonProperty(WrDsJ, [WrDsJ], void -24)
  private xpUTGKBw?: WrDsJ | [WrDsJ] = void -24;

  @jsonName("hSn")
  @jsonProperty([WrDsJ], WrDsJ)
  public xfHEeT1: [WrDsJ] | WrDsJ = new WrDsJ();

  private zWbw(): string { return ""; };

  public nwx1bnfX(): string { return ""; };

  private q1ZBW(): string { return ""; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class IYp6O extends Serializable {
  @jsonName("cwy")
  @jsonProperty(void -61, [Number], [WrDsJ])
  private xoeU6W: [number] | [WrDsJ] = [new WrDsJ()];

  @jsonName("snNDO")
  @jsonProperty(Number, WrDsJ)
  private iboWuSn: number | WrDsJ = 65;

  @jsonName("xFcNxTRr")
  @jsonProperty(WrDsJ, [WrDsJ])
  private axTnE1H: WrDsJ | [WrDsJ] = [new WrDsJ()];

  public ah2VRLJFtEt(): number { return 0; };

  public fYs1Xv(): string { return ""; };

  private owAC(): string { return ""; };

  public mb2g9Rdrbat(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class WUCB extends Serializable {
  @jsonName("oFLf8R")
  @jsonProperty(Soa5Koq)
  private tslY: Soa5Koq = new Soa5Koq();

  @jsonName("lFNM1KC9Ce")
  @jsonProperty([Soa5Koq])
  public bJ6: [Soa5Koq] = [new Soa5Koq()];

  private qMypH66(): string { return ""; };

  public vidzmZPvew1(): string { return ""; };

  public p1yIrEdTk(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class JI1qY4Z7 extends Serializable {
  @jsonName("fWDM")
  @jsonProperty(Soa5Koq)
  private n5wF66Zr: Soa5Koq = new Soa5Koq();

  @jsonName("ywY9x")
  @jsonProperty([String], [Soa5Koq])
  public kqRpMW: [string] | [Soa5Koq] = [new Soa5Koq()];

  private qFKUOJ(): string { return ""; };

  private qhyxxGNxXR(): number { return 0; };

  private g5XuVwq(): string { return ""; };

  private fuP90GemQx(): number { return 0; };

}

@jsonObject({ namingStrategy: new KebabCaseNamingStrategy() })
export class QDuKlreko extends Serializable {
  @jsonName("z2cL")
  @jsonProperty(void -7, JI1qY4Z7, [WUCB])
  private iJU: JI1qY4Z7 | [WUCB] = new JI1qY4Z7();

  @jsonName("wJ8pL7IQ")
  @jsonProperty(WUCB, [WUCB])
  private gz8Cc: WUCB | [WUCB] = [new WUCB()];

  @jsonName("oikt3Ipm6")
  @jsonProperty([String], JI1qY4Z7, void 7)
  private yP0EGK0h: [string] | JI1qY4Z7 = new JI1qY4Z7();

  @jsonName("fQOl")
  @jsonProperty([JI1qY4Z7])
  public eulNEHFM0: [JI1qY4Z7] = [new JI1qY4Z7()];

  private paScNdo4sp(): number { return 0; };

  private uh0kYuLRlw(): string { return ""; };

  private bmwYP(): string { return ""; };

  public iykzB4da(): string { return ""; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class MJHdb extends Serializable {
  @jsonName("sZJPT5")
  @jsonProperty([Number], Date)
  private aqV2M3O: [number] | Date = [-63];

  @jsonName("quuX")
  @jsonProperty([IYp6O], [QDuKlreko], [JI1qY4Z7])
  private dtCucC77v7c: [IYp6O] | [QDuKlreko] | [JI1qY4Z7] = [new IYp6O()];

  @jsonName("hXE3C3")
  @jsonProperty(Date, void -68, [Number])
  private orwuaTt: Date | [number] = new Date();

  @jsonName("nDmqb0obI9W")
  @jsonProperty([WrDsJ], Date)
  public jBohN: [WrDsJ] | Date = new Date("2058-01-19 15:19:37 UTC");

  public mE3NTL1(): string { return ""; };

  private p3N9r(): string { return ""; };

  public vxTkFdsm(): string { return ""; };

  private dmCq5ShLi(): string { return ""; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class UAMvP extends Serializable {
  @jsonName("qKXgifT")
  @jsonProperty([IYp6O])
  public rRw1IOUnJK: [IYp6O] = [new IYp6O()];

  @jsonName("fOZ0gvZ1KcA")
  @jsonProperty(Number)
  public al2ehVu: number = -81;

  @jsonName("sgfWn49oMmX")
  @jsonProperty(Date, QDuKlreko, IYp6O)
  private obec76MKiLP: Date | QDuKlreko | IYp6O = new IYp6O();

  @jsonName("zsb")
  @jsonProperty(Date)
  public uTKm1d3o: Date = new Date("1978-04-04 04:07:10 UTC");

  @jsonName("bAPfJ")
  @jsonProperty(IYp6O)
  private ovqih1i: IYp6O = new IYp6O();

  public lrVS2mw(): string { return ""; };

  public guG8F(): string { return ""; };

}

@jsonObject({ namingStrategy: new KebabCaseNamingStrategy() })
export class JYtb21xtU extends Serializable {
  @jsonName("hHPJ")
  @jsonProperty([WrDsJ])
  private wEPk7C: [WrDsJ] = [new WrDsJ()];

  @jsonName("tkKyVnx7Mk")
  @jsonProperty(Date, [QDuKlreko])
  private gRIln: Date | [QDuKlreko] = [new QDuKlreko()];

  @jsonName("uqk4NF5OWvb")
  @jsonProperty([WrDsJ], WrDsJ)
  public vKDSSa45: [WrDsJ] | WrDsJ = new WrDsJ();

  public ig7(): number { return 0; };

  public paHg2(): string { return ""; };

  public bOmNscySVZ(): number { return 0; };

  private jSeCz(): string { return ""; };

}

@jsonObject({ namingStrategy: new KebabCaseNamingStrategy() })
export class BfA5CPndb extends Serializable {
  @jsonName("oRtUuwA")
  @jsonProperty([WrDsJ], [IYp6O], [MJHdb])
  public luB: [WrDsJ] | [IYp6O] | [MJHdb] = [new MJHdb()];

  @jsonName("zGvVxx0H")
  @jsonProperty(UAMvP)
  public hLnwYWtESw: UAMvP = new UAMvP();

  @jsonName("nyTU")
  @jsonProperty([WUCB])
  public kCfuYb: [WUCB] = [new WUCB()];

  @jsonName("zkPccEbzq")
  @jsonProperty([String], WrDsJ)
  private reYMCT83Uqz: [string] | WrDsJ = new WrDsJ();

  @jsonName("sUe8naJf")
  @jsonProperty([String])
  public smlNOsUFzHN: [string] = [""];

  private hDv4(): number { return 0; };

  public f3iKUe(): number { return 0; };

  private dg7KgEMH7TU(): number { return 0; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class WisF extends Serializable {
  @jsonName("mwtHCUA")
  @jsonProperty(WrDsJ)
  private mYlh: WrDsJ = new WrDsJ();

  @jsonName("yJvDnhpGz")
  @jsonProperty(Soa5Koq)
  private h7fvG0: Soa5Koq = new Soa5Koq();

  @jsonName("nZWD")
  @jsonProperty(IYp6O)
  public xkcfwz: IYp6O = new IYp6O();

  @jsonName("sPq8LAw")
  @jsonProperty(WUCB)
  public pQ25fmx: WUCB = new WUCB();

  @jsonName("bR5uGqi3gu")
  @jsonProperty(JI1qY4Z7)
  private dKcMtbb2: JI1qY4Z7 = new JI1qY4Z7();

  @jsonName("lotZ0")
  @jsonProperty(QDuKlreko)
  public mNWZMlXccp: QDuKlreko = new QDuKlreko();

  @jsonName("xR09L")
  @jsonProperty(MJHdb)
  private g2hIk9Po: MJHdb = new MJHdb();

  
  @jsonProperty(UAMvP)
  public aXK0q: UAMvP = new UAMvP();

  @jsonName("jWzoEmJFYG")
  @jsonProperty(JYtb21xtU)
  public irif0I21qFB: JYtb21xtU = new JYtb21xtU();

  @jsonName("lbAKHbc")
  @jsonProperty(BfA5CPndb)
  public v5CpfTHt6: BfA5CPndb = new BfA5CPndb();

  private xaPMPQsT3(): number { return 0; };

  public cUOeJi(): number { return 0; };

  private jOCfOmO8C3d(): string { return ""; };

  public bfwMoz(): string { return ""; };

}
const toJSONMessage = "\n\nto JSON\n\n"
console.log(toJSONMessage)

const topToJSON = new WisF().toJSON()
console.log(topToJSON)

const fname = "result.txt"

function syncWriteFile(filename: string = fname, data: any) {
  writeFileSync(join(__dirname, filename), JSON.stringify(data, null, 2), {
    flag: 'w',
  });
}

syncWriteFile(fname, toJSONMessage)
syncWriteFile(fname, topToJSON)

const fromJSONMessage = "\n\nfrom JSON\n\n"

const topFromJSON = WisF.fromJSON(topToJSON)

console.log(fromJSONMessage)
console.log(topFromJSON)

syncWriteFile(fname, fromJSONMessage)
syncWriteFile(fname, topFromJSON)
      