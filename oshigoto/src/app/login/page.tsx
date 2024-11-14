"use client"
import React, {useState} from "react"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import Box from '@mui/system/Box';
import { FormControl, InputLabel, TextField, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useAuth } from "@/context/auth";
import { login, logout } from "@/lib/auth"

interface LoginProps {

}

const Login = () => {
    const user = useAuth();
    const [loading, setLoading] = useState<boolean>(false);

    const signIn = async() => {
        setLoading(true)
        try {
            await login()
        } catch(error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return(
        <div className="w-full h-auto flex flex-col items-center">
            <Box
                sx={{
                    height: "auto",
                    width: "60%",
                    my: 4,
                    gap: 4,
                    p: 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    boxShadow: 3,
                    bgcolor: 'background.paper'
                    }}
            >
                {/* Google認証ボタン */}
                <Stack direction="row" spacing={2} className="flex justify-center">
                {user ? (
                        <Button variant="outlined" startIcon={<GoogleIcon />} onClick={signIn} className="w-64 h-16">
                            Google認証
                        </Button>
                ) : (
                    <Button variant="outlined" startIcon={<GoogleIcon />} onClick={signIn} className="w-64 h-16">
                            Google認証
                    </Button>
                )
                }
                </Stack>
                <div className="my-4 text-center">または</div>
                {/* メールアドレスログインフォーム欄 */}
                <div className="mx-auto flex justify-center">
                    <FormControl variant="outlined" className="w-2/3">
                        <div className="my-4">
                            <InputLabel  
                                shrink 
                                sx={{
                                position: 'relative',
                                transform: 'none',
                                fontSize: '1rem',
                                fontWeight: 'bold'
                                }}
                            >
                                <Typography variant="body1">
                                メールアドレス
                                </Typography>
                            </InputLabel>
                            <TextField
                                id="custom-textfield"
                                variant="outlined"
                                placeholder="hoge@example.com"
                                fullWidth
                            />
                        </div>
                        <InputLabel 
                            shrink 
                            sx={{
                            position: 'relative',
                            transform: 'none',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                            }}
                        >
                            <Typography variant="body1">
                            パスワード
                            </Typography>
                        </InputLabel>
                        <TextField
                            id="custom-textfield"
                            variant="outlined"
                            fullWidth
                        />
                    </FormControl>
                </div>
                <Stack direction="row" spacing={2} className="flex justify-center my-8">
                    <Button variant="outlined" startIcon={<EmailIcon />} className="w-64 h-16" sx={{borderRadius: '30px'}}>
                        メールアドレスでログイン
                    </Button>
                </Stack>
            </Box>
            <Button variant="outlined" onClick={logout} color="warning" className="w-32 h-16">
                    ログアウト
            </Button>
        </div>
    )
}
export default Login
