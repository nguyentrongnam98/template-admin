import CallMadeIcon from "@mui/icons-material/CallMade";
import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Fab,
  FormHelperText,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Form.scss";
import ScrollTop from "./ScrollTop";
import { useForm, Controller, useController } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GridExample } from "./AgGird";

const validator = () => {
  return yupResolver(
    Yup.object().shape({
      selectOne: Yup.number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .nullable()
        .required("Field is required."),
      selectTwo: Yup.number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .nullable()
        .required("Field is required."),
      selectThree: Yup.number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .nullable()
        .required("Field is required."),
      selectFour: Yup.number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .nullable()
        .required("Field is required."),
      selectFive: Yup.number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .nullable()
        .required("Field is required."),
      inputOne: Yup.string().required("Field is required."),
      inputTwo: Yup.string().required("Field is required."),
    })
  );
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "이름", headerName: "이름", width: 130 },
  { field: "성", headerName: "성", width: 130 },
  {
    field: "나이",
    headerName: "나이",
    type: "number",
    width: 90,
  },
  {
    field: "성명",
    headerName: "성명",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.이름 || ""} ${params.row.성 || ""}`,
  },
];
const rows = [
  { id: 1, 이름: "Snow", 성: "Jon", 나이: 35 },
  { id: 2, 이름: "Lannister", 성: "Cersei", 나이: 42 },
  { id: 3, 이름: "Lannister", 성: "Jaime", 나이: 45 },
  { id: 4, 이름: "Stark", 성: "Arya", 나이: 16 },
  { id: 5, 이름: "Targaryen", 성: "Daenerys", 나이: null },
  { id: 6, 이름: "Melisandre", 성: null, 나이: 150 },
  { id: 7, 이름: "Clifford", 성: "Ferrara", 나이: 44 },
  { id: 8, 이름: "Frances", 성: "Rossini", 나이: 36 },
  { id: 9, 이름: "Roxie", 성: "Harvey", 나이: 65 },
];

export default function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm({
    resolver: validator(),
  });
  const submitForm = (data) => {
    console.log("data", data);
  };
  console.log("errors", errors);
  return (
    <div className="form">
      <Sidebar />
      <div className="form-container">
        <Navbar />
        <div className="top" id="back-to-top-anchor">
          <h3>게임 내역</h3>
        </div>
        <Box className="top">
          <Typography variant="h6">검색</Typography>
          <form onSubmit={handleSubmit(submitForm)}>
            <Box style={{ margin: "20px" }}>
              <Box
                style={{
                  paddingBottom: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingTop: "20px",
                  borderTop: "1px solid #ccc",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    소속 에이전트
                  </Grid>
                  <Grid item xs={8}>
                    <Controller
                      name="selectOne"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <FormControl fullWidth error={errors?.selectOne}>
                          <InputLabel
                            id="demo-simple-select-label"
                            className="inputLabel"
                          >
                            선택하세요.
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            className="select"
                            {...register("selectOne")}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                          <FormHelperText>
                            {errors?.selectOne?.message}
                          </FormHelperText>
                        </FormControl>
                      )}
                    />
                    <Checkbox /> <span>하부 에이전트 포함 검색 여부</span>
                  </Grid>
                </Grid>
              </Box>
              <Box
                style={{
                  paddingTop: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "20px",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    벤더
                  </Grid>
                  <Grid item xs={8}>
                    <Controller
                      name="selectTwo"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <FormControl fullWidth error={errors?.selectTwo}>
                          <InputLabel
                            id="demo-simple-select-label"
                            className="inputLabel"
                          >
                            선택하세요.
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            className="select"
                            {...register("selectTwo")}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                          <FormHelperText>
                            {errors?.selectTwo?.message}
                          </FormHelperText>
                        </FormControl>
                      )}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box
                style={{
                  paddingTop: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "20px",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    게임
                  </Grid>
                  <Grid item xs={8}>
                    <Controller
                      name="selectThree"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <FormControl fullWidth error={errors?.selectThree}>
                          <InputLabel
                            id="demo-simple-select-label"
                            className="inputLabel"
                          >
                            선택하세요.
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            className="select"
                            {...register("selectThree")}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                          <FormHelperText>
                            {errors?.selectThree?.message}
                          </FormHelperText>
                        </FormControl>
                      )}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box
                style={{
                  paddingTop: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "20px",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    기간
                  </Grid>
                  <Grid item xs={8}>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Controller
                        name="selectFour"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <FormControl
                            fullWidth
                            error={errors?.selectFour}
                            style={{ width: "49%" }}
                          >
                            <InputLabel
                              id="demo-simple-select-label"
                              className="inputLabel"
                            >
                              선택하세요.
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Age"
                              className="select"
                              {...register("selectFour")}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>
                              {errors?.selectFour?.message}
                            </FormHelperText>
                          </FormControl>
                        )}
                      />
                      <Controller
                        name="selectFive"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <FormControl
                            fullWidth
                            error={errors?.selectFive}
                            style={{ width: "49%" }}
                          >
                            <InputLabel
                              id="demo-simple-select-label"
                              className="inputLabel"
                            >
                              선택하세요.
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Age"
                              className="select"
                              {...register("selectFive")}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>
                              {errors?.selectFive?.message}
                            </FormHelperText>
                          </FormControl>
                        )}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box
                style={{
                  paddingTop: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "20px",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    트랜잭션ID
                  </Grid>
                  <Grid item xs={8}>
                    <Controller
                      name="inputOne"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <TextField
                            error={errors?.inputOne}
                            id="outlined-basic"
                            label="트랜잭션ID"
                            style={{ width: "100%" }}
                            placeholder="트랜잭션ID"
                            name="inputOne"
                            {...register("inputOne")}
                            helperText={
                              <FormHelperText style={{ marginLeft: "0px" }}>
                                {errors?.inputOne?.message}
                              </FormHelperText>
                            }
                          />
                        </>
                      )}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box
                style={{
                  paddingTop: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "20px",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    아이디
                  </Grid>
                  <Grid item xs={8}>
                    <Controller
                      name="inputTwo"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <TextField
                            error={errors?.inputTwo}
                            id="outlined-basic"
                            label="아이디"
                            style={{ width: "100%" }}
                            placeholder="아이디"
                            name="inputTwo"
                            {...register("inputTwo")}
                            helperText={
                                <FormHelperText style={{ marginLeft: "0px" }}>
                                  {errors?.inputTwo?.message}
                                </FormHelperText>
                              }
                          />
                        </>
                      )}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box
                style={{
                  paddingTop: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "20px",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    타입
                  </Grid>
                  <Grid item xs={8}>
                    <RadioGroup aria-label="gender" name="gender2">
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="전체"
                          control={<Radio color="primary" />}
                          label="전체"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="BET"
                          control={<Radio color="primary" />}
                          label="BET"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="WIN"
                          control={<Radio color="primary" />}
                          label="WIN"
                          labelPlacement="end"
                        />
                      </div>
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Box>
              <Box
                style={{
                  paddingTop: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "20px",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    타입
                  </Grid>
                  <Grid item xs={8}>
                    <RadioGroup aria-label="gender" name="gender2">
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="전체"
                          control={<Radio color="primary" />}
                          label="전체"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="성공"
                          control={<Radio color="primary" />}
                          label="성공"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="베팅취소"
                          control={<Radio color="primary" />}
                          label="베팅취소"
                          labelPlacement="end"
                        />
                      </div>
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Box>
              <Box
                style={{
                  paddingTop: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "20px",
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    상세내역 여부
                  </Grid>
                  <Grid item xs={8}>
                    <RadioGroup aria-label="gender" name="gender2">
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          value="전체"
                          control={<Radio color="primary" />}
                          label="전체"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="성공"
                          control={<Radio color="primary" />}
                          label="성공"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="대기"
                          control={<Radio color="primary" />}
                          label="대기"
                          labelPlacement="end"
                        />
                      </div>
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box style={{ margin: "20px" }}>
              <Button variant="contained" fullWidth type="submit">
                {" "}
                검색{" "}
              </Button>
            </Box>
          </form>
        </Box>
        <Box className="top">
          <Box style={{ padding: "20px", paddingTop: "0" }}>
            <Grid container>
              <Grid item xs={9}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "25%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Box>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      베팅 금액
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>0</p>
                  </Box>
                  <Box>
                    <p style={{ fontSize: "50px" }}>-</p>
                  </Box>
                  <Box>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      당첨 금액
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>0</p>
                  </Box>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "39%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Box>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      베팅 건수
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>0건</p>
                  </Box>
                  <Box>
                    <p style={{ fontSize: "40px" }}>+</p>
                  </Box>
                  <Box>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      당첨 건수
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>0건</p>
                  </Box>
                  <Box>
                    <p style={{ fontSize: "50px" }}>=</p>
                  </Box>
                  <Box>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      당첨 금액
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>0건</p>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                    손익 금액
                  </p>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>0</p>
                </Box>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ fontSize: "16px", fontWeight: "bold" }}>RTP</p>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>100%</p>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className="top">
          <Typography variant="h6">게임 내역</Typography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#b3b3b3",
            }}
          >
            <CheckIcon />
            <p>
              트랜잭션 상세내역은{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                에볼루션(evolution)
              </a>
              만 지원 중 이며{" "}
              <CallMadeIcon style={{ fontSize: "14px", color: "yellow" }} />{" "}
              클릭 시 조회 가능합니다. WIN 내역 이후 5~10분 사이 갱신됩니다.
            </p>
          </Box>
        </Box>
        <Box style={{ marginTop: "15px", height: "400px", marginLeft: "20px" }}>
          {/* <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          /> */}
          <GridExample/>
        </Box>
        <Box style={{ marginTop: "50px" }}>
          <ScrollTop>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Box>
      </div>
    </div>
  );
}
