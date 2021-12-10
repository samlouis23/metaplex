import React from 'react';
import { Layout } from 'antd';

import { AppBar } from '../AppBar';
import { Footer } from '../Footer';

const { Header, Content } = Layout;

export const AppLayout = React.memo((props: any) => {
  const bigTextHeader = (
          <div className="header">
          <svg viewBox="0 0 1401 253" fill="none">
            <path d="M511.568 215.353V211.588H507.803V207.824H473.921V211.588H481.45V215.353H477.686V219.118H473.921V211.588H470.156V249.235H473.921V253H488.98V249.235H492.744V237.941H507.803V234.176H511.568V230.412H515.333V215.353H511.568ZM492.744 219.118H500.274V230.412H492.744V219.118ZM564.256 215.353V211.588H560.491V207.824H526.608V211.588H534.138V215.353H530.373V219.118H526.608V211.588H522.844V249.235H526.608V253H541.667V249.235H545.432V237.941H560.491V234.176H564.256V230.412H568.02V215.353H564.256ZM545.432 219.118H552.961V230.412H545.432V219.118ZM613.178 237.941H598.119V211.588H594.355V207.824H579.296V211.588H586.825V215.353H583.061V219.118H579.296V211.588H575.531V249.235H579.296V253H613.178V249.235H616.943V241.706H613.178V237.941ZM665.881 215.353V211.588H662.116V207.824H628.233V211.588H635.763V215.353H631.998V219.118H628.233V211.588H624.469V249.235H628.233V253H643.292V249.235H647.057V237.941H662.116V234.176H665.881V230.412H669.645V215.353H665.881ZM647.057 219.118H654.586V230.412H647.057V219.118ZM714.803 237.941H699.744V211.588H695.98V207.824H680.921V211.588H688.45V215.353H684.686V219.118H680.921V211.588H677.156V249.235H680.921V253H714.803V249.235H718.568V241.706H714.803V237.941ZM767.506 207.824H729.858V211.588H737.388V215.353H733.623V219.118H729.858V211.588H726.094V249.235H729.858V253H767.506V249.235H771.27V241.706H767.506V237.941H748.682V234.176H767.506V230.412H771.27V226.647H767.506V222.882H748.682V219.118H767.506V215.353H771.27V211.588H767.506V207.824ZM820.193 211.588H816.428V207.824H786.311V211.588H790.075V215.353H786.311V219.118H782.546V215.353H778.781V249.235H782.546V253H797.605V249.235H801.369V234.176H812.664V249.235H816.428V253H820.193V249.235H823.958V215.353H820.193V211.588ZM812.664 222.882H801.369V219.118H812.664V222.882ZM872.881 207.824H838.998V211.588H842.763V215.353H838.998V219.118H835.233V215.353H831.469V226.647H835.233V230.412H861.586V234.176H835.233V237.941H831.469V249.235H835.233V253H869.116V249.235H872.881V245.471H876.645V226.647H872.881V222.882H854.057V219.118H872.881V215.353H876.645V211.588H872.881V207.824ZM925.568 211.588H921.803V207.824H887.921V211.588H895.45V215.353H891.686V219.118H887.921V211.588H884.156V249.235H887.921V253H902.98V249.235H906.744V237.941H910.509V241.706H914.274V245.471H918.039V249.235H921.803V253H925.568V249.235H929.333V237.941H925.568V234.176H921.803V230.412H925.568V226.647H929.333V215.353H925.568V211.588ZM906.744 222.882V219.118H918.039V222.882H906.744Z" fill="#E3E4D3"/>
            <path d="M80.4267 67.4706H14.7796V74.7647H22.0738V82.0588H14.7796V89.3529H7.48552V82.0588H0.191406V140.412H7.48552V147.706H14.7796V155H80.4267V147.706H87.7208V133.118H80.4267V125.824H43.9561V89.3529H80.4267V82.0588H87.7208V74.7647H80.4267V67.4706ZM182.509 74.7647H175.215V67.4706H116.862V74.7647H124.156V82.0588H116.862V89.3529H109.568V82.0588H102.273V140.412H109.568V147.706H116.862V155H175.215V147.706H182.509V140.412H189.803V82.0588H182.509V74.7647ZM167.92 125.824H146.038V89.3529H167.92V125.824ZM277.297 125.824H248.12V74.7647H240.826V67.4706H211.65V74.7647H226.238V82.0588H218.944V89.3529H211.65V74.7647H204.355V147.706H211.65V155H277.297V147.706H284.591V133.118H277.297V125.824ZM372.113 125.824H342.937V74.7647H335.642V67.4706H306.466V74.7647H321.054V82.0588H313.76V89.3529H306.466V74.7647H299.172V147.706H306.466V155H372.113V147.706H379.407V133.118H372.113V125.824ZM474.224 67.4706H401.282V74.7647H415.871V82.0588H408.577V89.3529H401.282V74.7647H393.988V147.706H401.282V155H474.224V147.706H481.518V133.118H474.224V125.824H437.753V118.529H474.224V111.235H481.518V103.941H474.224V96.6471H437.753V89.3529H474.224V82.0588H481.518V74.7647H474.224V67.4706ZM576.306 67.4706H510.659V74.7647H517.953V82.0588H510.659V89.3529H503.364V82.0588H496.07V140.412H503.364V147.706H510.659V155H576.306V147.706H583.6V133.118H576.306V125.824H539.835V89.3529H576.306V82.0588H583.6V74.7647H576.306V67.4706ZM678.388 67.4706H605.446V74.7647H620.035V82.0588H612.741V89.3529H605.446V96.6471H620.035V147.706H627.329V155H656.505V147.706H663.799V96.6471H678.388V89.3529H685.682V74.7647H678.388V67.4706ZM605.446 74.7647H598.152V89.3529H605.446V74.7647ZM780.47 74.7647H773.176V67.4706H714.823V74.7647H722.117V82.0588H714.823V89.3529H707.528V82.0588H700.234V140.412H707.528V147.706H714.823V155H773.176V147.706H780.47V140.412H787.764V82.0588H780.47V74.7647ZM765.881 125.824H743.999V89.3529H765.881V125.824ZM882.552 74.7647H875.258V67.4706H816.905V74.7647H824.199V82.0588H816.905V89.3529H809.611V82.0588H802.316V140.412H809.611V147.706H816.905V155H875.258V147.706H882.552V140.412H889.846V82.0588H882.552V74.7647ZM867.963 125.824H846.081V89.3529H867.963V125.824ZM984.634 74.7647H977.34V67.4706H918.987V74.7647H926.281V82.0588H918.987V89.3529H911.693V82.0588H904.398V140.412H911.693V147.706H918.987V155H977.34V147.706H984.634V140.412H991.928V82.0588H984.634V74.7647ZM970.045 125.824H948.163V89.3529H970.045V125.824ZM1086.72 74.7647H1079.42V67.4706H1021.07V74.7647H1028.36V82.0588H1021.07V89.3529H1013.77V82.0588H1006.48V140.412H1013.77V147.706H1021.07V155H1079.42V147.706H1086.72V140.412H1094.01V82.0588H1086.72V74.7647ZM1072.13 125.824H1050.25V89.3529H1072.13V125.824ZM1188.8 74.7647H1181.5V67.4706H1123.15V74.7647H1130.44V82.0588H1123.15V89.3529H1115.86V82.0588H1108.56V140.412H1115.86V147.706H1123.15V155H1181.5V147.706H1188.8V140.412H1196.09V82.0588H1188.8V74.7647ZM1174.21 125.824H1152.33V89.3529H1174.21V125.824ZM1290.88 74.7647H1283.59V67.4706H1225.23V74.7647H1232.53V82.0588H1225.23V89.3529H1217.94V82.0588H1210.64V140.412H1217.94V147.706H1225.23V155H1283.59V147.706H1290.88V140.412H1298.17V82.0588H1290.88V74.7647ZM1276.29 125.824H1254.41V89.3529H1276.29V125.824ZM1392.96 74.7647H1385.67V67.4706H1320.02V74.7647H1334.61V82.0588H1327.31V89.3529H1320.02V74.7647H1312.73V147.706H1320.02V155H1349.2V147.706H1356.49V125.824H1363.79V133.118H1371.08V140.412H1378.37V147.706H1385.67V155H1392.96V147.706H1400.26V125.824H1392.96V118.529H1385.67V111.235H1392.96V103.941H1400.26V82.0588H1392.96V74.7647ZM1356.49 96.6471V89.3529H1378.37V96.6471H1356.49Z" fill="#E3E4D3"/>
            <path d="M665.412 0.823528H627.765V4.58823H635.294V8.35294H631.529V12.1176H627.765V15.8824H635.294V42.2353H639.059V46H654.118V42.2353H657.882V15.8824H665.412V12.1176H669.176V4.58823H665.412V0.823528ZM627.765 4.58823H624V12.1176H627.765V4.58823ZM718.099 4.58823V0.823528H710.57V4.58823H706.805V15.8824H699.276V4.58823H695.511V0.823528H680.452V4.58823H687.982V8.35294H684.217V12.1176H680.452V4.58823H676.688V42.2353H680.452V46H695.511V42.2353H699.276V27.1765H706.805V42.2353H710.57V46H718.099V42.2353H721.864V4.58823H718.099ZM770.787 0.823528H733.14V4.58823H740.669V8.35294H736.904V12.1176H733.14V4.58823H729.375V42.2353H733.14V46H770.787V42.2353H774.551V34.7059H770.787V30.9412H751.963V27.1765H770.787V23.4118H774.551V19.6471H770.787V15.8824H751.963V12.1176H770.787V8.35294H774.551V4.58823H770.787V0.823528Z" fill="#E3E4D3"/>
          </svg>
            <span>in collaboration with Cloud Eater Studios</span>
          </div>
  );

  return (
    <>
      <Layout id={'main-layout'}>
        <span id={'main-bg'}></span>
        <span id={'bg-gradient'}></span>
        <span id={'static-header-gradient'}></span>
        <span id={'static-end-gradient'}></span>
        <Layout id={'width-layout'}>
          <Content
            style={{
              overflow: 'scroll',
              padding: '30px 48px ',
            }}
          >
          <Header
            className="App-Bar"
          >
            <AppBar />
          </Header>
            {props.children}
          </Content>
        </Layout>
        {/*<Footer />*/}
      </Layout>
    </>
  );
});