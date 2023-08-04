import "./styles.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { AppToolbar } from "./toolbar_bar";
import { AppIframe } from "./app_iframe";
import { AppUrlPreview } from "./app_url_preview";

const queryParamMap = [
  { value: "cryptoCurrencyCode=DAI", label: "cryptoCurrencyCode" },
  { value: "defaultCryptoCurrency=DAI", label: "defaultCryptoCurrency" },
  { value: "cryptoCurrencyList=ETH,DAI,USDT", label: "cryptoCurrencyList" },
  { value: "networks=ethereum, polygon,terra,mainnet", label: "networks" },
  { value: "network=ethereum", label: "network" },
  {
    value: "walletAddress=0x86349020e9394b2BE1b1262531B0C3335fc32F20",
    label: "walletAddress"
  },
  { value: "fiatCurrency=GBP", label: "fiatCurrency" },
  { value: "countryCode=IN", label: "countryCode" },
  { value: "fiatAmount=1100", label: "fiatAmount" },
  { value: "defaultNetwork=polygon", label: "defaultNetwork" },
  { value: "defaultFiatAmount=1100", label: "defaultFiatAmount" },
  { value: "defaultCryptoAmount=1", label: "defaultCryptoAmount" },
  {
    value: "defaultPaymentMethod=credit_debit_card",
    label: "defaultPaymentMethod"
  },
  { value: "paymentMethod=credit_debit_card", label: "paymentMethod" },
  {
    value: "disablePaymentMethods=gbp_bank_transfer, sepa_bank_transfer",
    label: "disablePaymentMethods"
  },
  { value: "email=user@mail.com", label: "email" },
  { value: "partnerOrderId=5e2f559511a9de", label: "partnerOrderId" },
  { value: "partnerCustomerId=23487492", label: "partnerCustomerId" },
  { value: "redirectURL=https://google.com", label: "redirectURL" },
  { value: "hideExchangeScreen=true", label: "hideExchangeScreen" },
  {
    value: "disableWalletAddressForm=true",
    label: "disableWalletAddressForm"
  },
  { value: "isAutoFillUserData=true", label: "isAutoFillUserData" },
  { value: "themeColor=FF5733", label: "themeColor" },
  { value: "hideMenu=true", label: "hideMenu" },
  { value: "isFeeCalculationHidden=true", label: "isFeeCalculationHidden" },
  { value: "exchangeScreenTitle=Buy Crypto", label: "exchangeScreenTitle " },
  { value: "cryptoAmount=0.5678", label: "cryptoAmount " },
  { value: "productsAvailed=BUY,SELL", label: "productsAvailed " },
  { value: "excludeFiatCurrencies=GBP,EUR", label: "excludeFiatCurrencies " },
  { value: "walletRedirection=true", label: "walletRedirection" }
];

const App = () => {
  var iFrameUrl =
    "https://global-stg.transak.com?apiKey=942ae75f-9eb2-4820-815c-23e2527da11d";
  const [queryParam, setQueryParam] = useState([]);
  const handleChange = (query) => {
    const { value, checked } = query.target;
    setQueryParam((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((filteredValue) => filteredValue !== value)
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppToolbar />
      <Box sx={{ flexGrow: "1", mt: "16px" }}>
        {queryParamMap.map((query, i) => (
          <Button
            variant="outlined"
            sx={{ mt: "8px", mr: "8px", textTransform: "none" }}
          >
            <label key={i}>
              <input
                type="checkbox"
                name="lang"
                value={query.value}
                onChange={handleChange}
              />
              {"  "}
              {query.label}
            </label>
          </Button>
        ))}
      </Box>
      <AppUrlPreview
        url={
          queryParam.length ? iFrameUrl + "&" + queryParam.join("&") : iFrameUrl
        }
      />

      <AppIframe
        url={
          queryParam.length ? iFrameUrl + "&" + queryParam.join("&") : iFrameUrl
        }
      />
    </Box>
  );
};

export default App;
