import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function SiteAssociation() {
  useEffect(() => {
    window.open(
      'https://amplify-portalsmobileapp-dev-150503-deployment.s3-us-west-2.amazonaws.com/public/apple-app-site-association',
      '_self'
    );

    // const url = window.URL.createObjectURL(new Blob());
    // const link = document.createElement('a');
//     link.href = URL.createObjectURL(
//       new Blob(
//         [
//           `{
//     "applinks": {
//         "apps": [],
//         "details": [
//             {
//                 "appID": "X3ULG7P9GJ.net.mystify",
//                 "paths": ["*"]
//             }
//         ]
//     }
// }`,
//         ],
//         { type: '/' }
//       )
//     );
    // link.href = 
    // link.setAttribute('download', 'apple-app-site-association');
    // // link.download = 'download';
    // document.body.appendChild(link);
    // link.click();
  }, []);

  return <View />;
}
