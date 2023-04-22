
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
export class QMVl extends Serializable {
  @jsonName("mgT0")
  @jsonProperty([Date], void -48, void -79)
  private qZ4Jm5?: [Date] = void -48;

  @jsonName("tKlS")
  @jsonProperty(Number, Date)
  public g8qKk: number | Date = new Date("2065-02-26 22:58:08 UTC");

  @jsonName("wxWFKTBLVZ")
  @jsonProperty([String])
  private szAkrbREV: [string] = ["vySXyg32p3"];

  public itTCi7nNK(): string { return ""; };

  public hQZRWcgor77(): string { return ""; };

  private xr1oqlyNg(): number { return 0; };

  public eAb(): string { return ""; };

  public hzvbw52Wo(): number { return 0; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class Ft26kfg9xQ7 extends Serializable {
  @jsonName("yzrZ")
  @jsonProperty([String], Date)
  public v5Qp: [string] | Date = ["36AS6"];

  @jsonName("ryFx")
  @jsonProperty(Date)
  private jnJPmYMoZa: Date = new Date("1975-06-24 20:15:57 UTC");

  @jsonName("ihKJP")
  @jsonProperty([Date], [QMVl], QMVl)
  public hAXh6SsWr: [Date] | [QMVl] | QMVl = new QMVl();

  private svKhRmL(): string { return ""; };

  private jHnCL(): string { return ""; };

}

@jsonObject({ namingStrategy: new KebabCaseNamingStrategy() })
export class QtDVTyab6 extends Serializable {
  @jsonName("anptD")
  @jsonProperty(String)
  private nQEIf1: string = "D5UrPqG4W3";

  @jsonName("m7VwfL")
  @jsonProperty(void 34, [Number], void -1)
  private qMoqg?: [number] = void -1;

  @jsonName("he1N1nM")
  @jsonProperty(void 37, Date, Number)
  private jdOUsJDdTR: Date | number = -96;

  private xKr(): string { return ""; };

  public bOQztJk13M(): number { return 0; };

  public pzD83w3y(): string { return ""; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class S3Mr7rVnF extends Serializable {
  @jsonName("yEtr")
  @jsonProperty(Ft26kfg9xQ7, [Number])
  public z0qU8ueK: Ft26kfg9xQ7 | [number] = new Ft26kfg9xQ7();

  @jsonName("h6VUSAnUF")
  @jsonProperty([Ft26kfg9xQ7], String)
  public y1gL2x65: [Ft26kfg9xQ7] | string = [new Ft26kfg9xQ7()];

  @jsonName("jqbWnt5oEE")
  @jsonProperty(Ft26kfg9xQ7)
  private tEH: Ft26kfg9xQ7 = new Ft26kfg9xQ7();

  @jsonName("n6HyIAziP")
  @jsonProperty([QtDVTyab6])
  private h5bpQlzp: [QtDVTyab6] = [new QtDVTyab6()];

  @jsonName("iorQK3")
  @jsonProperty(Number, QMVl, [Ft26kfg9xQ7])
  private zYvFm7sTPkW: number | QMVl | [Ft26kfg9xQ7] = new QMVl();

  private nI3uEVv(): number { return 0; };

  public vSzpHxvZ(): number { return 0; };

  private tUPLeMq(): string { return ""; };

  public iNhQ(): string { return ""; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class WUPn44TfT extends Serializable {
  @jsonName("slc7")
  @jsonProperty(QMVl)
  private l4hCxh3V: QMVl = new QMVl();

  @jsonName("w6aM0")
  @jsonProperty(String)
  private wnTpgxiD: string = "62w";

  @jsonName("tTp")
  @jsonProperty(Ft26kfg9xQ7, S3Mr7rVnF)
  private eqwQUyxvDSd: Ft26kfg9xQ7 | S3Mr7rVnF = new S3Mr7rVnF();

  @jsonName("bPpyR")
  @jsonProperty(void 11, [QMVl])
  private n4kR1: [QMVl] = [new QMVl()];

  private mzmGU3Alrki(): number { return 0; };

  public ppw(): string { return ""; };

  private ubP91k(): string { return ""; };

  public vdk2I1(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class GeS5XxrlOS extends Serializable {
  @jsonName("kA5N4")
  @jsonProperty([Ft26kfg9xQ7])
  public h6fMb: [Ft26kfg9xQ7] = [new Ft26kfg9xQ7()];

  @jsonName("rtGW")
  @jsonProperty(Ft26kfg9xQ7, [Ft26kfg9xQ7], [Number])
  private yGFv0r1E5: Ft26kfg9xQ7 | [Ft26kfg9xQ7] | [number] = new Ft26kfg9xQ7();

  @jsonName("q2HwpNN")
  @jsonProperty([Ft26kfg9xQ7])
  private y7tiI3TwyLw: [Ft26kfg9xQ7] = [new Ft26kfg9xQ7()];

  private kmA(): number { return 0; };

  public geO76TwZUqZ(): number { return 0; };

  public nSdwDus(): string { return ""; };

  public aYNybIwq(): string { return ""; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class RuZuyHsS extends Serializable {
  @jsonName("nHmkEaa2e")
  @jsonProperty([Date])
  private nUKf: [Date] = [new Date("2028-07-10 18:26:15 UTC")];

  @jsonName("dvGdHNSa")
  @jsonProperty(Date)
  private aaHuanBzuvN: Date = new Date("1999-11-10 13:35:08 UTC");

  @jsonName("dTTEE271nFq")
  @jsonProperty(Number)
  private kN3Alz: number = 92;

  public jgJna(): number { return 0; };

  public rRVkS(): string { return ""; };

  public uqP9WGhO(): string { return ""; };

  public dgm(): string { return ""; };

  public xGMx(): string { return ""; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class K6mqk0GF extends Serializable {
  @jsonName("bwoLl")
  @jsonProperty(WUPn44TfT, [GeS5XxrlOS])
  public inMmLek: WUPn44TfT | [GeS5XxrlOS] = [new GeS5XxrlOS()];

  @jsonName("rvv")
  @jsonProperty(void -60)
  public oJV?  = void -60;

  public gJYQbKx(): string { return ""; };

  private hSbUwQhX(): string { return ""; };

  private cKAzfaH(): string { return ""; };

  private w5B1v(): string { return ""; };

  private b21lU(): number { return 0; };

}

@jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
export class HtyCiyRy extends Serializable {
  @jsonName("oJUWAb2")
  @jsonProperty(String, [QMVl], S3Mr7rVnF)
  private qgMaB7MrH: string | [QMVl] | S3Mr7rVnF = new S3Mr7rVnF();

  @jsonName("mUv1XgOi")
  @jsonProperty([S3Mr7rVnF])
  public jP9gWN: [S3Mr7rVnF] = [new S3Mr7rVnF()];

  @jsonName("gHQnQ292q")
  @jsonProperty(void -17)
  private cbDusV0o?  = void -17;

  private zFtFGmlBm(): number { return 0; };

  private bxHUCOV(): number { return 0; };

  public bxW(): string { return ""; };

  private aJxWSNgfMZ(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class FXV3m4eJ9CT extends Serializable {
  @jsonName("k5qNX0SKYLC")
  @jsonProperty([S3Mr7rVnF], [Number])
  public yLJkg: [S3Mr7rVnF] | [number] = [-34];

  @jsonName("wil7EudWI")
  @jsonProperty([S3Mr7rVnF], K6mqk0GF)
  public q7wQz579: [S3Mr7rVnF] | K6mqk0GF = [new S3Mr7rVnF()];

  @jsonName("u6cCPki")
  @jsonProperty(QMVl, Number, [QMVl])
  public oXogFXof: QMVl | number | [QMVl] = -80;

  @jsonName("qTB0n0")
  @jsonProperty(Date, [QMVl])
  private bNP8pX3: Date | [QMVl] = new Date("2058-11-23 17:36:39 UTC");

  public u7yc1(): number { return 0; };

  private dDNY(): number { return 0; };

  private zHhnwfX(): string { return ""; };

  public aXv4p4gG8(): string { return ""; };

  private b70L5VQ(): number { return 0; };

}

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class AARAqS5 extends Serializable {
  @jsonName("z1kU")
  @jsonProperty(QMVl)
  public gD0UTdC: QMVl = new QMVl();

  @jsonName("gY1yY8OJLn")
  @jsonProperty(Ft26kfg9xQ7)
  private yM48k: Ft26kfg9xQ7 = new Ft26kfg9xQ7();

  @jsonName("xK9")
  @jsonProperty(QtDVTyab6)
  public moXnOA: QtDVTyab6 = new QtDVTyab6();

  @jsonName("zURnHitgD6")
  @jsonProperty(S3Mr7rVnF)
  private yAn: S3Mr7rVnF = new S3Mr7rVnF();

  @jsonName("zw0k")
  @jsonProperty(WUPn44TfT)
  private e754RY7AF: WUPn44TfT = new WUPn44TfT();

  @jsonName("oKlaXM")
  @jsonProperty(GeS5XxrlOS)
  private wWq: GeS5XxrlOS = new GeS5XxrlOS();

  @jsonName("jVNEKp")
  @jsonProperty(RuZuyHsS)
  public bH7t4w: RuZuyHsS = new RuZuyHsS();

  @jsonName("r9i7q9tx")
  @jsonProperty(K6mqk0GF)
  private jrxYmHAd2: K6mqk0GF = new K6mqk0GF();

  @jsonName("vWmV1p")
  @jsonProperty(HtyCiyRy)
  private mAtLuN: HtyCiyRy = new HtyCiyRy();

  @jsonName("iJlP9VOf96J")
  @jsonProperty(FXV3m4eJ9CT)
  public mIowRUnNbF: FXV3m4eJ9CT = new FXV3m4eJ9CT();

  private hWkbipRdz(): string { return ""; };

  private f4K21Gf6H2a(): number { return 0; };

  public jpF(): string { return ""; };

  public uQSc1H(): number { return 0; };

  private ukKtfUyGYy(): string { return ""; };

}
const toJSONMessage = "\n\nto JSON\n\n"
console.log(toJSONMessage)

const topToJSON = new AARAqS5().toJSON()
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

const topFromJSON = AARAqS5.fromJSON(topToJSON)

// console.log(topFromJSON)

syncWriteFile(fname, fromJSONMessage)
syncWriteFile(fname, topFromJSON)
      