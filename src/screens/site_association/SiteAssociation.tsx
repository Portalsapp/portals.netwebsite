import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function SiteAssociation() {
  useEffect(() => {
    const url = window.URL.createObjectURL(new Blob());
    const link = document.createElement('a');
    link.href = URL.createObjectURL(
      new Blob(
        [
          `{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "X3ULG7P9GJ.net.mystify",
                "paths": ["*"]
            }
        ]
    }
}`,
        ],
        { type: 'application/json' }
      )
    );
    link.setAttribute(
      'download',
      'apple-app-site-association'
    );
    document.body.appendChild(link);
    link.click();
  }, []);

  return <View />;
}
