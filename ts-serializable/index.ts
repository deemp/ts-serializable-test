
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
export class ATgCbs35 extends Serializable {
  @jsonName("zUkUnO0VK2K")
  @jsonProperty(void -23)
  public wQxpOQJldb?  = void -23;

  @jsonName("zJyC")
  @jsonProperty(Date, [Date])
  public zZJ: Date | [Date] = new Date("2091-03-31 19:38:13 UTC");

  @jsonName("xU80")
  @jsonProperty(void -29)
  public hfKV?  = void -29;

  @jsonName("y5vaQLYo")
  @jsonProperty(Number, Date, [String])
  private tOM6LO8: number | Date | [string] = -32;

  @jsonName("wl6")
  @jsonProperty(void -9, String)
  public uQuWZ?: string = void -9;

  public jXMitp(): number { return 0; };

  public kB8XDPoGId(): number { return 0; };

  public p5oiJ6s555(): number { return 0; };

  public yLOzd8Wz(): string { return ""; };

  private sIqNRCGr(): string { return ""; };

}

@jsonObject({ namingStrategy: new KebabCaseNamingStrategy() })
export class FEu55QipQV extends Serializable {
  @jsonName("x555b")
  @jsonProperty(Date, String, [Number])
  private xwnI2lgCKYb: Date | string | [number] = new Date("1978-02-09 15:46:36 UTC");

  @jsonName("iAleGcJNanX")
  @jsonProperty(Date, void -91, void 17)
  public xBGLKJGU866?: Date = void 17;

  @jsonName("ySul")
  @jsonProperty(void -27)
  private ayqeQK9Dz?  = void -27;

  @jsonName("iTgaev")
  @jsonProperty([Number], void -68)
  private n19vFr4AX: [number] = [91];

  public nGQS(): number { return 0; };

  private nNizdpo6U3o(): string { return ""; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class IZ5E4dM3 extends Serializable {
  @jsonName("pDbztxYO7")
  @jsonProperty(void 75, Number)
  private bBrL: number = 25;

  @jsonName("dOftW")
  @jsonProperty(void 31)
  public wsRU?  = void 31;

  @jsonName("xl3b52AXY")
  @jsonProperty([FEu55QipQV])
  public zHatTORD: [FEu55QipQV] = [new FEu55QipQV()];

  @jsonName("rzbyN3Own")
  @jsonProperty([Number])
  private pmBpYUr: [number] = [49];

  @jsonName("sJf4H")
  @jsonProperty(FEu55QipQV)
  private iuIOiSwn: FEu55QipQV = new FEu55QipQV();

  private faH(): number { return 0; };

  private tO2e(): string { return ""; };

  public f1q(): number { return 0; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class WMZkC6wllo extends Serializable {
  @jsonName("oC8HFUy0rO")
  @jsonProperty(ATgCbs35)
  public zhOTa: ATgCbs35 = new ATgCbs35();

  @jsonName("lKO")
  @jsonProperty([ATgCbs35], [Number], [String])
  private gQwb: [ATgCbs35] | [number] | [string] = [-10];

  public lJqmd(): string { return ""; };

  public el7ToT(): number { return 0; };

  public qGB27d(): number { return 0; };

  private vxZqo2(): number { return 0; };

  public dFl7abCGG(): string { return ""; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class XT2nvyPJiYs extends Serializable {
  @jsonName("mAxo")
  @jsonProperty([Number], [ATgCbs35])
  private yOJIik: [number] | [ATgCbs35] = [new ATgCbs35()];

  @jsonName("wA3Gem473q")
  @jsonProperty(ATgCbs35, Date, [String])
  private rKy: ATgCbs35 | Date | [string] = ["40GeD7U"];

  @jsonName("zwOOu49C7w")
  @jsonProperty([ATgCbs35], void 65, [String])
  private t0xo: [ATgCbs35] | [string] = ["8v2gqWkg"];

  public b1KW(): string { return ""; };

  public qWk0Ax(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class Hous extends Serializable {
  @jsonName("rFQ6JpS")
  @jsonProperty([IZ5E4dM3])
  public mr3f: [IZ5E4dM3] = [new IZ5E4dM3()];

  @jsonName("yn6KJmZY")
  @jsonProperty(IZ5E4dM3, ATgCbs35)
  private med8X: IZ5E4dM3 | ATgCbs35 = new ATgCbs35();

  @jsonName("qqbuYLSaGc")
  @jsonProperty([IZ5E4dM3])
  public apCD: [IZ5E4dM3] = [new IZ5E4dM3()];

  @jsonName("jgWYn")
  @jsonProperty(ATgCbs35)
  public cJdJOA: ATgCbs35 = new ATgCbs35();

  @jsonName("gCE1fIT")
  @jsonProperty(Date)
  public mMNDsGM: Date = new Date("2014-10-22 19:28:28 UTC");

  public rNWyvXvk2(): number { return 0; };

  private fFsHg(): string { return ""; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class VkyEF extends Serializable {
  @jsonName("xen")
  @jsonProperty(Hous, [Hous])
  private yfexG8qqv20: Hous | [Hous] = new Hous();

  @jsonName("q4z5m2")
  @jsonProperty([Date], [XT2nvyPJiYs], [String])
  private bY9i92UD9ad: [Date] | [XT2nvyPJiYs] | [string] = [new XT2nvyPJiYs()];

  @jsonName("w48JQww35")
  @jsonProperty(Hous, String, [Hous])
  public kN1pnD: Hous | string | [Hous] = new Hous();

  private kEUhF(): number { return 0; };

  public oDTXgFy(): string { return ""; };

  public vGovkoMako(): string { return ""; };

  private hMyt(): number { return 0; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class W9Gk extends Serializable {
  @jsonName("geFvE")
  @jsonProperty(WMZkC6wllo)
  public vzg: WMZkC6wllo = new WMZkC6wllo();

  @jsonName("desoSre")
  @jsonProperty(void -55, [ATgCbs35])
  private fYAEir2XlL: [ATgCbs35] = [new ATgCbs35()];

  @jsonName("xw4fw")
  @jsonProperty(WMZkC6wllo, [WMZkC6wllo], [Hous])
  public uW6: WMZkC6wllo | [WMZkC6wllo] | [Hous] = new WMZkC6wllo();

  @jsonName("yDGA")
  @jsonProperty(ATgCbs35, [Date], [String])
  private y59e8Nm: ATgCbs35 | [Date] | [string] = new ATgCbs35();

  @jsonName("wV7")
  @jsonProperty(Number, ATgCbs35, [WMZkC6wllo])
  public fBR1QVHV: number | ATgCbs35 | [WMZkC6wllo] = [new WMZkC6wllo()];

  private daL(): number { return 0; };

  public eJ1RMQJ(): number { return 0; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class OUoMQftGtgT extends Serializable {
  @jsonName("qbMU")
  @jsonProperty(String)
  private t05deWeN: string = "bN";

  @jsonName("hesdBS4I")
  @jsonProperty(void 5, String, IZ5E4dM3)
  public b6VC: string | IZ5E4dM3 = new IZ5E4dM3();

  @jsonName("ls0tXzbk")
  @jsonProperty(Number, IZ5E4dM3, VkyEF)
  private sJChqoU3g: number | IZ5E4dM3 | VkyEF = -77;

  private wFUA(): string { return ""; };

  public p2gs1V6hr(): number { return 0; };

  private yVlrN81(): number { return 0; };

  public paaU(): number { return 0; };

  private ugd(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class PfZX extends Serializable {
  @jsonName("bUR")
  @jsonProperty(OUoMQftGtgT, [ATgCbs35], [Number])
  private o12ohul: OUoMQftGtgT | [ATgCbs35] | [number] = [-26];

  @jsonName("i4YH4fvo")
  @jsonProperty(ATgCbs35, [ATgCbs35], [Number])
  public mitq344m: ATgCbs35 | [ATgCbs35] | [number] = new ATgCbs35();

  @jsonName("dJ0aqwGLro")
  @jsonProperty(Date, OUoMQftGtgT)
  public sLs0XcN8O: Date | OUoMQftGtgT = new OUoMQftGtgT();

  public ssP1NBu7s(): string { return ""; };

  private vzKgxVq(): number { return 0; };

  public zHButKFSU(): number { return 0; };

  private zxEn(): string { return ""; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class Fsvk81L extends Serializable {
  @jsonName("nDeg")
  @jsonProperty(ATgCbs35)
  public eFBN: ATgCbs35 = new ATgCbs35();

  @jsonName("oLcNPhFOg")
  @jsonProperty(FEu55QipQV)
  private ep7H3bAeKa: FEu55QipQV = new FEu55QipQV();

  @jsonName("vPJZCUnbSk")
  @jsonProperty(IZ5E4dM3)
  public fkcZ7tIoDi: IZ5E4dM3 = new IZ5E4dM3();

  @jsonName("oNcxWHa4qF")
  @jsonProperty(WMZkC6wllo)
  private xk2: WMZkC6wllo = new WMZkC6wllo();

  @jsonName("zbhW")
  @jsonProperty(XT2nvyPJiYs)
  private dCnbbTlhlWa: XT2nvyPJiYs = new XT2nvyPJiYs();

  @jsonName("vNfDFx")
  @jsonProperty(Hous)
  public j19EdwbhH: Hous = new Hous();

  @jsonName("mthAEHRRQzm")
  @jsonProperty(VkyEF)
  public tJ3ZCDdvZ7: VkyEF = new VkyEF();

  @jsonName("mFFq5")
  @jsonProperty(W9Gk)
  private uw3vocgLez: W9Gk = new W9Gk();

  @jsonName("bTz")
  @jsonProperty(OUoMQftGtgT)
  public zMlPeJMhY3: OUoMQftGtgT = new OUoMQftGtgT();

  @jsonName("gXI")
  @jsonProperty(PfZX)
  private n36ISEEn02R: PfZX = new PfZX();

  private oFwJQvx5uv(): string { return ""; };

  private zmoK(): string { return ""; };

  public qWLP0eHxUZU(): number { return 0; };

  public mcPQaXnfNe(): number { return 0; };

}
const toJSONMessage = "\n\nto JSON\n\n"
console.log(toJSONMessage)

const topToJSON = new Fsvk81L().toJSON()
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

const topFromJSON = Fsvk81L.fromJSON(topToJSON)

// console.log(topFromJSON)

syncWriteFile(fname, fromJSONMessage)
syncWriteFile(fname, topFromJSON)
      