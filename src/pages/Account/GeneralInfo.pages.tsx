import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  useMediaQuery,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import { useLocation } from "react-router-dom";

import theme from "theme";
import { ProfileForm, BankCard, ProfileSettings } from "components";
import { BreadCrumbsModel } from "core/types";
import { HeaderLayout } from "layouts";
import { EditIcons, WalletIcon, CustomButton, SettingIcon } from "uiKit";
import { useUsersStore } from "store";

const breadcrumbData: BreadCrumbsModel[] = [
  {
    title: "  حساب کاربــــــــری",
    link: "/",
    id: "1",
    color: theme.palette.grey[600],
    active: false,
  },
];

interface BankFormData {
  bankName: string;
  shebaNumber: string;
  cardNumber: string;
  accountNumber: string;
  cardHolderName: string;
}

export const GeneralInfoPage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { fetching, userData } = useUsersStore();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  // Set initial tab based on URL
  useEffect(() => {
    if (location.pathname.includes("/bank-info")) {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  }, [location.pathname]);

  const [bankFormData, setBankFormData] = useState<BankFormData>({
    bankName: "",
    shebaNumber: "",
    cardNumber: "",
    accountNumber: "",
    cardHolderName: "",
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleBankFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBankFormData({ ...bankFormData, [e.target.name]: e.target.value });
  };

  const handleBankFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // General Info
        return <ProfileForm userData={userData && userData} />;

      case 1: // Bank Info
        return <ProfileSettings />;

      default:
        return null;
    }
  };

  return (
    <>
      {fetching ? (
        ""
      ) : (
        <>
          <HeaderLayout
            title=" ویرایش حساب کاربــــــــری"
            breadcrumb={breadcrumbData}
          />
          <Box display={"flex"} flexDirection={"column"}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                bgcolor: "white",
                borderRadius: "10px 10px 0 0",
                sm: {
                  boxShadow: "none",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 15,
                  alignItems: "center",
                  padding: "18px 28px",
                  sm: {
                    flexDirection: "column",
                    gap: "8px",
                    alignItems: "flex-start",
                    padding: isMobile ? "10px 16px" : "15px 16px 20px",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  flex={1}
                  gap={"10px"}
                  alignItems={"center"}
                >
                  <EditIcons
                    color={theme.palette.primary[600]}
                    width={22}
                    height={22}
                  />

                  <Typography
                    fontSize={16}
                    fontWeight={700}
                    color={theme.palette.grey[500]}
                  >
                    {activeTab === 0 && "پروفایل"}
                    {activeTab === 1 && "تنظیمات"}
                  </Typography>
                </Box>
              </Box>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  "& .MuiTab-root": {
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  },
                }}
              >
                <Tab label=" پروفایل" />
                <Tab label=" تنظیمات" />
              </Tabs>
            </Paper>
            <Box
              bgcolor="white"
              minHeight={600}
              display={"flex"}
              gap={"30px"}
              flexDirection={"column"}
              padding={isMobile ? "0 16px" : "28px"}
            >
              {renderTabContent()}
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
