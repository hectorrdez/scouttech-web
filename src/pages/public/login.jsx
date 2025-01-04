import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Column } from "@/layouts/column.jsx";
import { Row } from "@/layouts/row.jsx";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { getCsrfCode } from "../../lib/auth";
import logoImg from "../../assets/logo.svg";

export default function Login() {
  const [seePass, setSeePass] = useState(false);
  const [toTextPass, setToTextPass] = useState(false);
  const [formData, setFormData] = useState({});

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    setFormData({ ...formData, csrf: getCsrfCode() });
  }, []);

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Card className="min-w-[300px] w-full max-w-sm p-6 flex flex-col gap-6 animate-card-show-up">
        <Column className="space-y-1">
          <Link to={"/"} className="flex space-x-2">
            <img src={logoImg} alt="logo" />
          </Link>
          <h1 className="font-semibold tracking-tight text-2xl leading-tight">
            Iniciar sesión
          </h1>
          <p className="text-sm text-muted-foreground">
            Introduce tus datos para iniciar sesión
          </p>
        </Column>
        <form
          className="grid gap-8"
          onSubmit={handleSubmit}
          action="#"
          method="post"
        >
          <Column className="grip gap-4">
            <Column className="gap-2">
              <Label htmlFor="user">Usuario</Label>
              <Input
                type="text"
                id="user"
                placeholder="Nombre de usuario"
                value={formData.user}
                onChange={handleData}
                name="user"
              />
            </Column>
            <Column className="gap-2 relative">
              <Label htmlFor="pass">Contraseña</Label>
              <button
                type="button"
                className={`absolute right-2 top-7 ${
                  seePass ? "visible" : "hidden"
                }`}
                onClick={() => setToTextPass(!toTextPass)}
                onMouseOver={() => setSeePass(true)}
                onMouseOut={() => setSeePass(false)}
              >
                {seePass ? <IconEye /> : <IconEyeClosed />}
              </button>
              <Input
                type={toTextPass ? "text" : "password"}
                id="pass"
                placeholder="Contraseña"
                onMouseOver={() => setSeePass(true)}
                onMouseOut={() => setSeePass(false)}
                value={formData.pass}
                onChange={handleData}
                name="pass"
              />
            </Column>
            <Row className="items-center space-x-2">
              <Checkbox
                id="no-sign-off"
                name="noExpiration"
                value={formData.noExpiration}
                onChange={() =>
                  setFormData({
                    ...formData,
                    noExpiration: !formData.noExpiration,
                  })
                }
              />
              <Label htmlFor="no-sign-off">Mantener la sesión iniciada</Label>
            </Row>
          </Column>
          <Column className="items-center w-full">
            <Column className="w-full items-center gap-2">
              <Button type="submit" className="w-full">
                Entrar
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    o si no tienes cuenta
                  </span>
                </div>
              </div>
              <Link to="/access/register" className="w-full">
                <Button variant="secondary" type="button" className="w-full">
                  Crear cuenta
                </Button>
              </Link>
            </Column>
          </Column>
        </form>
      </Card>
    </div>
  );
}
